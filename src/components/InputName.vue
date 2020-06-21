<template>
    <v-container>
        <v-row>
            まずはニックネームを決めよう
        </v-row>
        <v-row>
            <v-text-field
                    v-model="nickname"
                    label="Nickname"
            ></v-text-field>
        </v-row>
        <v-row>
            <v-btn @click="submit" :disabled="!nickname">入場</v-btn>
        </v-row>
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
