import Vue from 'vue';

Vue.directive('meu-transform', { 
  
  update: function (el, binding){
    let current = 0;

    el.addEventListener('click', function (){
      
      let incremento = binding.value;    
      let efeito;

      if(binding.arg == 'rotate'){

        if(binding.modifiers.reverse){

          current-=incremento;

        }else{

          current+=incremento;
          
        }

        efeito = `rotate(${current}deg)`; 
        
      }else if(binding.arg == 'scale'){
          
        efeito = `scale(${incremento})`

      }
      el.style.transform = efeito;
      //manieria de acessar o modifiers do animate
      if(binding.modifiers.animate) el.style.transition = "transform 0.5s";
    });
  }
});

/*
  diretivas: são demarcações que dão certas funcionalidades e/ou caracteristicas para o elemento a qual ela foi inserida,
  como a possibilidade de eventos de click e mudanção no estilo. É importante ressaltar que as diretivas alteram direta-
  mente o DOM, além de serem aplicadas em quase todo elemento dependendo da funcionalidade da diretivas. Diretivas podem
  ser implementadas diretamente em "directives" na parte de scripts do componente, porém não poderiam ser usadas em qual-
  quer componente de maneira global, po isso é implementada em uma pasta específica chamada "directives". Mais info em:
  https://br.vuejs.org/v2/guide/custom-directive.html.

  modifiers: modifiers é uma forma mais fácil e enxuta de acessar os elementos do objetos que são passados como valores
  para as diretivas. Sintaxe de uso: v-myDirective.modifiers. Forma de acessa-los na lógica: binding.modifiers.<modificador>
*/