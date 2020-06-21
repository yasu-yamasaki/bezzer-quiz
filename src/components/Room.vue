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
  import {createSession} from '@/graphql/mutations'
  import {CreateSessionInput, CreateSessionMutationVariables, ListSessionsQueryVariables} from '@/API'
  import {listSessions} from '@/graphql/queries'

  @Component
  export default class Room extends Vue {
    @Prop()
    user!: User
    status: string = '開始準備中'

    session: any = {}

    async created() {
      this.status = '空いているセッション検索中'
      this.session = await API.graphql(graphqlOperation(listSessions, {
          filter: {
            id: {eq: null}
          }
        } as ListSessionsQueryVariables
      ))

      this.session = await API
        .graphql(graphqlOperation(createSession, {
          input: {
            host: this.user,
            joined: 0
          }

        } as CreateSessionMutationVariables))
    }
  }
</script>
