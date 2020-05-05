import Vue from 'vue';
import Router from 'vue-router';
import Dashboard from './components/Dashboard.vue';



import DisplayContent from './components/DisplayContent.vue';
import Donjon from './components/Donjon.vue';
import Raid from './components/Raid.vue';

Vue.use(Router);

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/',
            component: Dashboard,
            name: 'dashboard'
        },

        //WOTLK PATH
        {
            path: '/wotlk',
            component: DisplayContent
        },
        {
            path: '/wotlk/donjon',
            component: Donjon
        },
        {
            path: '/wotlk/raid',
            component: Raid
        },
        //BC PATH
        {
            path: '/bc',
            component: DisplayContent
        },
        {
            path: '/bc/donjon',
            component: Donjon
        },
        {
            path: '/bc/raid',
            component: Raid
        },

        //CLASSIC PATH
        {
            path: '/classic',
            component: DisplayContent

        },
        {
            path: '/classic/donjon',
            component: Donjon
        },
        {
            path: '/classic/raid',
            component: Raid
        }
    ]
});

