import HelloWorld from './components/HelloWorld';
import Home from './components/Home';
import Agenda from './components/Agenda';
import Blog from './components/Blog';
import Partners from './components/Partners';
import Place from './components/Place'

export default [
    {
        name: 'home',
        path: '/',
        component: Home,
    },
    {
        name: 'agenda',
        path: '/agenda',
        component: Agenda,
    },
    {
        name: 'blog',
        path: '/blog',
        component: Blog
    },
    {
        name: 'partners',
        path: '/partners',
        component: Partners
    },
    {
        name: 'place',
        path: '/place',
        component: Place
    }
];
