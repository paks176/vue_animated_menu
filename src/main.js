import Vue from 'vue'
import App from './App.vue'
import Store from '@/store/main';

Vue.config.productionTip = true

new Vue({
  store: Store,
  render: h => h(App),
}).$mount('#app');
