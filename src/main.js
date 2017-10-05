import Vue from 'vue'
import router from './router';
import App from './components/app.vue';
import './components';
import './styles';

new Vue({
  el: '#app',
  router,
  render: h => h(App)
});
