import Vue from 'vue';
import App from './App.vue';
import VueReource from 'vue-resource';
import VueRouter from 'vue-router';
import Vuex from 'vuex'
import './directives/rotation'

//import de rootas de routes.js; é possível fazer diretamente em "const router" no objeto "routes".
//import usando chaves pois "routes" não e um objeto pad~rao do VueJS.
import { routes } from './routes'; 

Vue.use(VueReource);
//Definição de um endereço padrão para realizar posts e gets
Vue.http.options.root = 'http://localhost:3000';

Vue.use(VueRouter);
Vue.use(Vuex);

const router = new VueRouter({
  mode : 'history',
  routes : routes
});

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router: router
}).$mount('#app');

/*
  Vue router -> É uma lib para VueJS que permite a renderização de múltiplas SPAs (Single Page Applications) atraavés 
  de caminhos, ou seja, cada caminho na URL rendeiza uma SPA diferente sem precisar recarregar a página. Para mais in-
  formações do seu funcionamento, visite https://router.vuejs.org/; 
  Tutorial resumindo o uso do vue-router: https://www.codingame.com/playgrounds/3808/how-to-use-vue-router.

  Vue resource -> Vue resource é uma lib para o vueJS feita para realizar e receber requisiçôes HTTP de web servers,
  mais informações em: https://github.com/pagekit/vue-resource.
*/