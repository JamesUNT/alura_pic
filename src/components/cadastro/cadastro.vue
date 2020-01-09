<template>

  <div>
    <h1 class="centralizado">Cadastro</h1>
    <h2 class="centralizado"></h2>

    <!-- O formulário executa uma função de submissão para trabalhar os dados capturados-->
    <form @submit.prevent="grava()">
      <div class="controle">
        <label for="titulo">TÍTULO</label>   <!-- modifier.lazy so aplica o v-model quando o estado do input mudar -->
        <input id="titulo" autocomplete="off" v-model.lazy="foto.titulo">
      </div>

      <div class="controle">
        <label for="url">URL</label>
        <input id="url" autocomplete="off" v-model.lazy="foto.url">
        <imagem-responsiva/>
      </div>

      <div class="controle">
        <label for="descricao">DESCRIÇÃO</label>
        <textarea id="descricao" autocomplete="off" 
        v-model="foto.descricao"></textarea>
      </div>

      <div class="centralizado">
        <meu-botao rotulo="GRAVAR" tipo="submit"/>
        <router-link to="/">
          <meu-botao rotulo="VOLTAR" tipo="button"/>
        </router-link>
      </div>
    </form>
    <p>{{ erro_mesage }}</p>
  </div>
</template>

<script>

import ImagemResponsiva from '../imagem-responsiva/imagemResponsiva'
import Botao from '../shared/botao/botao'
import foto from '../../domain/foto/foto'
import fotoService from '../../domain/foto/fotoService'

export default {

  components: {

    'imagem-responsiva': ImagemResponsiva, 
    'meu-botao': Botao
  },

  data () {

    return {

      foto: new foto(),
      erro_mesage: ''

    }

  },

  methods: {

    grava () {
      this.service.cadastra(this.foto)
      .then(() => this.erro_mesage = '', (err) => err ? 
      this.erro_mesage = `houve um erro ao registrar a foto, por favor tente novamente mais tarde.` 
      : this.erro_mesage = '');


      // this.resource.save(this.foto)
      // .then(() => this.erro_mesage = '', (err) => err ? 
      // this.erro_mesage = `houve um erro ao registrar a foto, por favor tente novamente mais tarde.` 
      // : this.erro_mesage = '');

      // this.$http.post('http://localhost:3000/v1/fotos', this.foto)
      // .then(() => this.erro_mesage = '', (err) => err ? 
      // this.erro_mesage = `houve um erro ao registrar a foto, por favor tente novamente mais tarde.` 
      // : this.erro_mesage = '');

      event.target.reset();
    }
  },

  created() {

    this.service = new fotoService(this.$resource);

    //this.resource = this.$resource('v1/fotos');

  }
}

</script>
<style scoped>

  .centralizado {
    text-align: center;
  }
  .controle {
    font-size: 1.2em;
    margin-bottom: 20px;

  }
  .controle label {
    display: block;
    font-weight: bold;
  }

 .controle label + input, .controle textarea {
    width: 100%;
    font-size: inherit;
    border-radius: 5px
  }

  .centralizado {
    text-align: center;
  }

</style>

<!-- 
  submissão de formulário: o formulário é composto pela tag "form" e suas informações internas como labes, inputs, etc.
  para que o vue consiga trabalhar os dados é preciso adicionar o atributo "@submit='function'", ao qual executa uma fun-
  ção quando o formulário é submetido com algum botão com type="submit"; essa função normalmente é responsável em traba-
  lhar os dados capturados nos inputs, ao qual é usado a diretiva "v-model" ou "@input='$event.target.value'" para cap-
  turar. Por padrão, um formulário logo depois de submetido recarrega a página inteira, com o onjetivo de mater as cara-
  cterísticas de uma SPA, ou seja, não recarregar a página, o "@submit" recebe um "modifiers" chamado ".prevent", evi-
  tando o auto reload da página.
-->