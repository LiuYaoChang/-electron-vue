import Vue from 'vue'

import App from './App'
// import Resource from 'vue-resource'

// Vue.use(Resource)
Vue.config.debug = true

/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(App)
})
