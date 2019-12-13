<template>
  <div id="app">

    <nav>
      <ul>       
        <li :key="route" v-for="route in routes">
          <router-link :to="route.path">{{ route.titulo }}</router-link>
        </li>
      </ul>
    </nav>

    <router-view></router-view>

  </div>
</template>

<script>
"use strict"
import { routes } from './routes';

export default {

  name: 'App',

  data() {

    return {

      routes : routes

    }
  }
}
</script>

<style>
  #app {
    font-family: Helvetica, sans-serif;
    width: 96%;
    margin: 0 auto;
  }
</style>

<!-- 
**Observações importantes:**
  1 - Nâo é permitido interpolação ( {{ }} ) dentro de atributos HTML, use a diretiva "v-bind" ou simplismente dois
  pontos (:) para ligar esses dados de "data()" aos atributos.

  2 - Vue resource é uma lib para o vueJS feita para realizar e receber requisiçôes HTTP de web servers, mais informa-
  ções em: https://github.com/pagekit/vue-resource.

  **3** - Computed vs Methods:
  "Computed" -> no VueJS é usada para trabalhar a lógica de forma reativa do componente, ou seja, toda vez que o compo-
  nente sofre modificação como um update, a função "computed" atrelada a ele também será atualizada; É onde ocorre as 
  interações dos dados armazenados em "data()" acontecem. As funções criadas em "computed" nunca aceitam parâmetros e 
  precisam retornar alguma coisa, pois fazem parte de alguma lógica de programação como um laço de repetição ou uma de-
  cisão.

  "Methods" -> é usado para armazenar funções que são chamadas em decorrência de algum evento no DOM como um click; es-
  sas ffunções aceitam parâmetros e não são obrigadas a retornar algo.

  4 - created() é uma propriedade do componente responsável por executar alguma função logo quando o DOM é carregado.
-->