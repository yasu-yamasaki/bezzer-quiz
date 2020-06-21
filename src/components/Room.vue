<template>
    <v-container>
        <v-row>
            マッチング
        </v-row>
        <v-row v-if="!session">
            {{status}}
        </v-row>
        <v-row v-else>
            {{ session }}
        </v-row>
    </v-container>
</template>

<script lang="ts">
  import Vue from 'vue'
  import {Component, Prop} from 'vue-property-decorator'
  import User from '@/domain/User'
  import {API, graphqlOperation} from 'aws-amplify'
  import {createSession, updateSession} from '@/graphql/mutations'
  import {
    CreateSessionInput,
    CreateSessionMutationVariables,
    ListSessionsQuery,
    ListSessionsQueryVariables,
    OnUpdateSessionSubscription,
    OnUpdateSessionSubscriptionSubscriptionVariables,
    UpdateSessionMutationVariables
  } from '@/API'
  import {listSessions} from '@/graphql/queries'
  import {onUpdateSession} from '@/graphql/subscriptions'
  import Observable from 'zen-observable-ts'

  const moment = require('moment')

  @Component
  export default class Room extends Vue {
    @Prop()
    user!: User
    status: string = '開始準備中'
    session: any = null

    async created() {
      console.log('a')
      await this.checkWaitSession()
      console.log('c')
      if (this.session == null) {
        console.log('e')
        await this.createSession()
      }
      console.log('f')
      this.subscription()
    }

    async checkWaitSession() {
      this.status = '空いているセッション検索中'
      let result: any = await API.graphql(graphqlOperation(listSessions, {
          filter: {
            createdA: {gt: moment().add(-1, 'minute').toISOString()}
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
      if (!sessions.listSessions?.items.length) {
        return
      }
      this.session = sessions.listSessions?.items[0]
      this.session.guest = this.user
      this.session.joined = 1
      await this.mutation()
    }

    async createSession() {
      this.status = '新しいセッション作成中'
      this.session = await API
        .graphql(graphqlOperation(createSession, {
          input: {
            host: this.user,
            joined: 0,
            version: 1,
            events: []
          }
        } as CreateSessionMutationVariables))
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

    subscription() {
      console.log('subsc')
      const result = (API.graphql(graphqlOperation(onUpdateSession, {
          id: this.session.id
        } as OnUpdateSessionSubscriptionSubscriptionVariables
      ))) as Observable<object>
      result.subscribe({
        next: (data) => {
          this.session = data
        }
      })
    }
  }
</script>
