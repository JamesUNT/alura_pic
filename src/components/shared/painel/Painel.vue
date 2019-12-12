<template>
<!--Em todo template é obrigratório possuir uma div-->
    <div class="painel">
        <h2 class="painel-titulo">{{ titulo }}</h2>
        <slot class="painel-conteudo">    
            <!-- 
                A tag "slot" é responsável por integrar as tags "filhas" do conteúdo que o component tiver; nesse
                exemplo, a tag "slot" virou uma "img", pois "img" é a tag filha do componente
            -->
        </slot>    
    </div>
</template>

<script>
"use strict"
export default {
  name: 'Painel',
  /*
    props -> é a configuração das propriedades do seu componente, que podem ser acessadas via interpolação ou como pro-
    priedades normalmente; no código abaixo, é adicionado a propriedade "título" ao qual é usada dentro de uma div atra-
    vés de interpolação. quando esse componente for usado no App.vue, ele terá que ter uma propriedade "titulo" com al-
    gum valor.
  */
  props:["titulo"]
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

  .painel .painel-titulo {
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
</style>