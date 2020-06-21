<template>
    <v-container>
        <v-list>
            <template v-for="(message, index) in messages">
                <v-list-item-content>
                    <v-list-item-title>{{message}}</v-list-item-title>
                </v-list-item-content>
                <v-divider></v-divider>
            </template>
            <template v-if="session">
                <v-list-item>
                    <v-list-item-title>
                        {{ isHost ? session.guest.name : session.host.name }}さんと繋がりました。
                    </v-list-item-title>
                </v-list-item>
                <v-list-item>
                    <v-text-field
                            v-model="message"
                            label="message"
                    ></v-text-field>
                    <v-btn @click="sendMessage">送信</v-btn>
                </v-list-item>
                <v-divider></v-divider>
                <template v-for="event in session.events">
                    <v-list-item-content>
                        <v-list-item-title>{{event}}</v-list-item-title>
                    </v-list-item-content>
                    <v-divider></v-divider>
                </template>
            </template>
        </v-list>
    </v-container>
</template>

<script lang="ts">
  import Vue from 'vue'
  import {Component, Prop} from 'vue-property-decorator'
  import User from '@/domain/User'
  import {API, graphqlOperation} from 'aws-amplify'
  import {createSession, updateSession} from '@/graphql/mutations'
  import {
    CreateSessionInput, CreateSessionMutation,
    CreateSessionMutationVariables,
    ListSessionsQuery,
    ListSessionsQueryVariables,
    OnUpdateSessionSubscription,
    OnUpdateSessionSubscriptionSubscriptionVariables,
    UpdateSessionMutationVariables
  } from '@/API'
  import {listSessions} from '@/graphql/queries'
  import {onUpdateSession, onUpdateSessionSubscription} from '@/graphql/subscriptions'
  import Observable from 'zen-observable-ts'

  const moment = require('moment')

  @Component
  export default class Room extends Vue {
    @Prop()
    user!: User
    messages: string[] = ['マッチング開始']
    message: string = ''
    session: any = null
    isHost: boolean = false

    async created() {
      await this.checkWaitSession()
      if (this.session == null) {
        await this.createSession()
      }
      this.subscription()
    }

    async checkWaitSession() {
      this.messages.push('空いているセッション検索中')
      let result: any = await API.graphql(graphqlOperation(listSessions, {
          filter: {
            createdAt: {gt: moment().add(-2, 'minute').toISOString()}
          }
        } as ListSessionsQueryVariables
      ))
      if (!('data' in result)) {
        return
      }
      const sessions = result.data as ListSessionsQuery
      if (!(sessions.listSessions?.items)) {
        return
      }

      let newSession: any = null
      sessions.listSessions?.items.forEach((item: any) => {
        if (!newSession && !item.guest) {
          newSession = item
        }
      })
      if (!newSession) {
        return
      }
      this.messages.push('見つかりました。')
      this.session = newSession
      this.session.guest = this.user
      this.session.joined = 1
      await this.mutation()
    }

    async createSession() {
      this.messages.push('見つからないので、新しいセッション作成中')
      const ret = await API
        .graphql(graphqlOperation(createSession, {
          input: {
            host: this.user,
            joined: 0,
            version: 1,
            events: []
          }
        } as CreateSessionMutationVariables)) as any
      this.messages.push('作成完了')
      this.messages.push('見つかるまで待機')
      this.isHost = true
      this.session = ret.data.createSession
    }

    async mutation() {
      this.session.version += 1
      await API.graphql(graphqlOperation(updateSession, {
        input: {
          id: this.session.id,
          createdAt: this.session.createdAt,
          host: this.session.host,
          guest: this.session.guest,
          joined: 0,
          version: this.session.version,
          events: this.session.events
        }
      } as UpdateSessionMutationVariables))
    }

    async sendMessage() {
      this.session.events.push(this.message)
      await this.mutation()
    }

    subscription() {
      const result = (API.graphql(graphqlOperation(onUpdateSession))) as Observable<object>
      result.subscribe({
        next: (data: any) => {
          const updatedSession = data.value.data.onUpdateSession as any
          if (updatedSession.id == this.session.id) {
            this.session = updatedSession
          }
        }
      })
    }
  }
</script>
