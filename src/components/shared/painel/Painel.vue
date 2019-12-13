<template>
<!--Em todo template é obrigratório possuir uma div-->
    <div class="painel">
        <h2 class="painel-titulo" @click="visivel = !visivel">{{ titulo }}</h2>
        <transition name="painel-fade">
          <div class="painel-conteudo" v-show="visivel">
            <slot></slot>    
          </div>
        </transition>
    </div>
</template>

<script>
"use strict"

export default {

  name : 'Painel',

  props : ["titulo"],

  data(){

    return {

      visivel: true

    }
  }
}
</script>

<style scoped>

  .painel {
    padding: 0 auto;
    border: solid 2px grey;
    display: inline-block;
    margin: 5px;
    box-shadow: 5px 5px 10px grey;
    width: 200px;
    height: 100%;
    vertical-align: top;
    text-align: center;
  }
  .painel-titulo {
    text-align: center;
    border: solid 2px;
    background: lightblue;
    margin: 0 0 15px 0;
    padding: 10px;
    text-transform: uppercase;
  }
  * {
    box-shadow: 5px 5px 10px black;
  }

  /* estado inicial e final quando o condicional é "true" ou "false" */
  .painel-fade-enter, .painel-fade-leave-to {
    opacity: 0;
  }

  /* estado final e inicial quando o condicional é "true" ou "false" */
  .painel-fade-enter-to, .painel-fade-leave {
    opacity: 1;
  }

  /* tempo e tipo de transição quando o condicional é "true" ou "false" */
  .painel-fade-enter-active, .painel-fade-leave-active {
    transition: opacity 1s;
  }
</style>

<!--
    props -> é a configuração das propriedades do seu componente, que podem ser acessadas via interpolação ou como pro-
    priedades normalmente; no código abaixo, é adicionado a propriedade "título" ao qual é usada dentro de uma div atra-
    vés de interpolação. quando esse componente for usado no App.vue, ele terá que ter uma propriedade "titulo" com al-
    gum valor. 

    slot -> A tag "slot" é responsável por integrar as tags "filhas" do conteúdo que o component tiver; nesse exemplo,
    a tag "slot" virou uma "img", pois "img" é a tag filha do componente.

    transition -> tag criada para aplicar animações css em transições de estado de componentes, atrelado a renderização
    condicional (v-if) e/ou exibição condicional (v-show) das classes filhas. Consulte a documentação para mais informa-
    ções: https://br.vuejs.org/v2/guide/transitions.html.
-->