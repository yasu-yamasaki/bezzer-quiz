<template>
    <v-container>
        <v-row>
            マッチング
        </v-row>
        <v-row v-if="!session">
            {{status}},{{result}}
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
    ListSessionsQueryVariables, OnUpdateSessionSubscription
  } from '@/API'
  import {listSessions} from '@/graphql/queries'
  import {onUpdateSession} from '@/graphql/subscriptions'

  @Component
  export default class Room extends Vue {
    @Prop()
    user!: User
    status: string = '開始準備中'

    session: any = null
    result: any = null

    async created() {
      await this.checkWaitSession()
      if (this.session != null) {
        return
      }

      this.session = await API
        .graphql(graphqlOperation(createSession, {
          input: {
            host: this.user,
            joined: 0
          }

        } as CreateSessionMutationVariables))
    }

    async checkWaitSession() {
      this.status = '空いているセッション検索中'
      let result: any = await API.graphql(graphqlOperation(listSessions, {
          filter: {
            joined: {eq: 0}
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
      this.session = listSessions[0]
      this.session.guest = this.user
      this.session.joined = 1

      this.session = await API
        .graphql(graphqlOperation(onUpdateSession, {

        } as OnUpdateSessionSubscription
    }
  }
</script>
