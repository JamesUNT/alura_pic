import Vue from 'vue';
import App from './App.vue';
import VueReource from 'vue-resource';

Vue.use(VueReource);

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
