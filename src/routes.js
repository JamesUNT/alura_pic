// import cadastro from './components/cadastro/cadastro';
import home from './components/home/home';

export const routes = [
    {
        path : '/', 
        component : home,
        titulo : 'Home' 
    },
    {
        path :'/cadastro',
        //carregar um componente dessa maneira atribui a ele uma característica de "lazy reload"
        component : () => import('./components/cadastro/cadastro'),
        titulo : 'Cadastro'
    }
];