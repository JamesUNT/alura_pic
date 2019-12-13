import cadastro from './components/cadastro/cadastro';
import home from './components/home/home';

export const routes = [
    {
        path : '/', 
        component : home,
        titulo : 'Home' 
    },
    {
        path :'/cadastro',
         component : cadastro,
         titulo : 'Cadastro'
    }
];