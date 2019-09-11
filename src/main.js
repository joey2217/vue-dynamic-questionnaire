import Vue from 'vue';
import App from './App.vue';

import 'vue-dynamic-questionnaire/dist/vue-dynamic-form.css';

import './plugins/element';

Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
}).$mount('#app');
