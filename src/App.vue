<template>
    <v-app>
        <v-app-bar
                app
                color="primary"
                dark
        >
            早押しクイズ
            <v-spacer></v-spacer>
            <span v-if="user.name">ようこそ {{ user.name }}さん</span>
        </v-app-bar>
        <v-main>
            <InputName @setName="setName" v-if="!user.name"/>
            <Room :user="user" v-else/>
        </v-main>
    </v-app>
</template>

<script lang="ts">
  import {Component, Vue} from 'vue-property-decorator'
  import User, {createUser} from '@/domain/User'
  import InputName from '@/components/InputName.vue'
  import Room from '@/components/Room.vue'

  @Component({
    components: {
      InputName,
      Room
    },
  })
  export default class App extends Vue {
    user: User = createUser()

    setName(name: string) {
      this.user.name = name
    }
  }
</script>
