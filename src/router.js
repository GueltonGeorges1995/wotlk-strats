import Vue from 'vue';
import Router from 'vue-router';
import Dashboard from './components/Dashboard.vue';

import DonjonWotlk from './components/wotlk/DonjonWotlk.vue';
import RaidWotlk from './components/wotlk/RaidWotlk.vue';

import DonjonBc from './components/bc/DonjonBc.vue';
import RaidBc from './components/bc/RaidBc.vue';

import DonjonClassic from './components/classic/DonjonClassic.vue';
import RaidClassic from './components/classic/RaidClassic.vue';

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
            component: DonjonWotlk
        },
        {
            path: '/wotlk/donjon',
            component: DonjonWotlk
        },
        {
            path: '/wotlk/raid',
            component: RaidWotlk
        },
        //BC PATH
        {
            path: '/bc',
            component: DonjonBc
        },
        {
            path: '/bc/donjon',
            component: DonjonBc
        },
        {
            path: '/bc/raid',
            component: RaidBc
        },

        //CLASSIC PATH
        {
            path: '/classic',
            component: DonjonClassic

        },
        {
            path: '/classic/donjon',
            component: DonjonClassic
        },
        {
            path: '/classic/raid',
            component: RaidClassic
        }
    ]
});

