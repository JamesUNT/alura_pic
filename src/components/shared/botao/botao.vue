<template>

  <button :class="estiloDoBotao" :type='tipo' @click="disparaAcao()">{{ rotulo }}</button>
  
</template>

<script>
export default {

  name : 'botao',

  props : {

    tipo : {
      required : true,
      type : String
    },

    rotulo : {
      required : true,
      type : String
    },

    confirmacao : Boolean,
    estilo : String
  },

  methods : {

    disparaAcao : function () {

      if(this.confirmacao) {

        if(confirm('confirma operação ?')) {

          this.$emit('botaoAtivado');

        }else {

          return;

        }
      }
      this.$emit('botaoAtivado');
    } 
  },
  computed : {

    estiloDoBotao() {
      if(this.estilo == 'padrao') { 

        return 'botao botao-padrao';

      }else if(this.estilo == 'perigo') {

        return 'botao botao-perigo';

      }else {
        return 'botao botao-padrao';
      }
    }

  }

}
</script>

<style scoped>

  .botao {
    display: inline-block;
    padding: 10px;
    border-radius: 3px;
    margin: 10px;
    font-size: 1.2em;
  }

  .botao-perigo {
    background: firebrick;
    color: white;
  }

  .botao-padrao {
    background: darkcyan;
    color: white;
  }

</style>

<!-- 
    1 -eventos customizados: São eventos realizados através de inputs que executam uma determinada função, porém não pos-
    suem nenhuma transformação específica, sendo mais generalistas e customizaveis. Os nomes dos eventos são demarcados
    por uma chamada **global** determidada por "this.$emit('nome_do_evento')", a qual pode ser atrelada uma lógica para
    sua ocorrência no programa. essa demarcação representa o método pai(remover) que será executado pelo acionamento 
    do método filho(disparaAcao) atrvés de um evento(nome_do_evento) que neste exemplo se chama "botaoAtivado". O "this.
    $emit" possui um segundo parâmetro chamado "$event" ao qual é uma demarcação utilizada para representação do segundo
    parâmetro no elemento pai que utilizara-lo, por exemplo: this.$emit('nome_do_evento', new Date()), caso queira usar
    esse "new Date()" no elemento pai, ele é representado por "$event"; para maisi nformações de elementos personaliza-
    dos acesse: https://br.vuejs.org/v2/guide/components-custom-events.html.

    2 - cacracteristica das props: As props aceitam validação interna de tipo de dados como "required" e "type" no for-
    mato de objeto como feito acima.
-->