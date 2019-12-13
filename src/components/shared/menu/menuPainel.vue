<template>
  <nav>
    <ul>       
      <li :key="rota.titulo" v-for="rota in rotas">
        <!-- Tag responsável pela transição entre componentes através de um link -->
        <router-link :to="rota.path">{{ rota.titulo }}</router-link>
      </li>
    </ul>
  </nav>
</template>

<script>
"use strict"

export default {

    name : 'menu-painel',

    //props : ['rotas'] --> maneira padrão de declaração de props.

    props : { //props com validação de tipo de dado.

      rotas : {

        type : Array,
        required : true

      }

    }

}
</script>

<style scoped>

</style>