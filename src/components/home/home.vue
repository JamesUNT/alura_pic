<template>
  <div>
    <!-- É possível usar a interpolação "v-text" para ligar textos em data()-->
    <h1 class="centralizado">{{ titulo }}</h1>

    <p type="centralizado" v-show="mensage">
      {{mensage}}
    </p>
    <input type="search" class="filtro" 
    v-model="filtro" 
    placeholder="filtre pelo titulo">
    
    <p class="centralizado erro_msg">{{ erro_mesage }}</p>
    <p>{{ filtro }}</p>

    <ul class="lista-fotos">                                          
      <li class="lista-fotos-item" :key="foto.titulo" v-for="foto in fotosComFiltros">
          <meu-painel :titulo="foto.titulo">

            <img-respon v-meu-transform:rotate.animate="15" :url="foto.url" :titulo="foto.titulo"></img-respon>

            <botao tipo="button" 
            rotulo="REMOVER" 
            :confirmacao="false"
            estilo="perigo"
            @botaoAtivado="remover(foto)">
            </botao>
          </meu-painel>
      </li>  
    </ul>
  </div>
</template>

<script>
"use strict"
//import do arquivo
import Painel from "../shared/painel/Painel";
import imagemResponsiva from "../imagem-responsiva/imagemResponsiva";
import botao from '../shared/botao/botao'
import fotoService from '../../domain/foto/fotoService'


export default {

  name: 'app',

  components : {

   'meu-painel' : Painel,
   'img-respon' : imagemResponsiva,
   'botao' : botao

  },
  computed: {
      
    fotosComFiltros() {
  
      if(this.filtro) {
  
        let exp = new RegExp(this.filtro.trim(),'yi');
        return this.fotos.filter(foto => exp.test(foto.titulo));
  
      }else{
  
        return this.fotos;
  
      }
    }
  },
  methods: {

    remover(elemento) {

      this.service.apaga(elemento._id)
      .then(() => {
        let indice = this.fotos.indexOf(elemento);
        this.fotos.splice(indice, 1); 
        this.mensage = "Foto removida com sucesso."
      }, 
      err => this.erro_mesage = `Não foi possível remover a foto: ${err}`);

      // this.resource.delete({
      //   id: elemento._id
      // })
      // .then(() => {
      //   let indice = this.fotos.indexOf(elemento);
      //   this.fotos.splice(indice, 1); 
      //   this.mensage = "Foto removida com sucesso."
      // }, 
      // err => this.erro_mesage = `Não foi possível remover a foto: ${err}`);

      // this.$http.delete(`v1/fotos/${elemento._id}`)
      // .then(() => {
      //   let indice = this.fotos.indexOf(elemento);
      //   this.fotos.splice(indice, 1); 
      //   this.mensage = "Foto removida com sucesso."
      // }, 
      // err => this.erro_mesage = `Não foi possível remover a foto: ${err}`);
    }

  },
  data () {

    return {

      titulo : "Bem vindo",
      erro_mesage : "",
      mensage: "",
      fotos : [],
      filtro : "",
      acao:""

    }
  },
  created() {

    this.service = new fotoService(this.$resource);


    this.service
    .lista()
    .then(fotos => this.fotos = fotos, erro => erro.status == 0 ? 
    this.erro_mesage = "Houve um erro ao carregar o conteúdo, por favor tente novamente." : 
    this.erro_mesage = "");

    //Criação de um objeto universal que disponibiliza um endereço dinamicamente
    this.resource = this.$resource('v1/fotos{/id}');

    //.query() é equivalente a $http.get() para endereços previamente estabelecidos (resource).
    this.resource
    .query()    
    .then(res => res.json())
    .then(fotos => this.fotos = fotos, erro => erro.status == 0 ? 
    this.erro_mesage = "Houve um erro ao carregar o conteúdo, por favor tente novamente." : 
    this.erro_mesage = "");


    // this.$http.get("http://localhost:3000/v1/fotos")
    // .then(res => res.json())
    // .then(fotos => this.fotos = fotos, erro => erro.status == 0 ? 
    // this.erro_mesage = "Houve um erro ao carregar o conteúdo, por favor tente novamente." : 
    // this.erro_mesage = "");

  }
}
</script>

<style>
  .centralizado {
    text-align: center;
  }
  
  .lista-fotos {
    list-style-type:none;
  }

  .lista-fotos .lista-fotos-item {
    display: inline-block;
  }

  .filtro {
    display: block;
    width: 100%;
  }

  .erro_msg {
    color: crimson;
  }
</style>

<!-- 
**Observações importantes:**
  1 - Nâo é permitido interpolação ( {{ }} ) dentro de atributos HTML, use a diretiva "v-bind" ou simplismente dois
  pontos (:) para ligar esses dados de "data()" aos atributos.

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