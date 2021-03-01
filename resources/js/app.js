require('./bootstrap');

import Vue from 'vue'
import 'livewire-vue'
window.Vue = require('vue');


Vue.component('app', require('./vue/app.vue').default);

const app = new Vue({
    el : '#app',
});
