<template>
    <v-container>
        <v-list>
            <v-list-item>
                まずはニックネームを決めよう
            </v-list-item>
            <v-list-item>
                <v-text-field
                        v-model="nickname"
                        label="Nickname"
                ></v-text-field>
            </v-list-item>
            <v-list-item>
                <v-btn @click="submit" :disabled="!nickname">入場</v-btn>
            </v-list-item>
        </v-list>
    </v-container>
</template>

<script lang="ts">
  import Vue from 'vue'
  import {Component} from 'vue-property-decorator'

  @Component
  export default class InputName extends Vue {
    nickname = ''

    submit() {
      this.$emit('setName', this.nickname)
    }
  }
</script>
