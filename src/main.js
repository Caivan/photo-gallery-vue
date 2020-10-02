import Vue from 'vue';
import App from './App.vue';
import router from '@/router';
Vue.config.productionTip = false
// Set a cross-site cookie for third-party contexts


new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
