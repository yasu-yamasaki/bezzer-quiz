import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
// @ts-ignore
import aws_exports from './aws-exports.js'
import Amplify from 'aws-amplify'

Amplify.configure(aws_exports)

Vue.config.productionTip = false

new Vue({
  vuetify,
  render: (h) => h(App)
}).$mount('#app')
