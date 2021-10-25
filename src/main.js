import Vue from 'vue'
import App from './App.vue'
import intersection from './directives/intersection'

Vue.config.productionTip = false

Vue.directive('intersection', intersection)

new Vue({
  render: h => h(App),
}).$mount('#app')
