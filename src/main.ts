import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify';
import moment from 'moment';

//FILTERS
Vue.filter('date', () => {
  moment.locale('en-gb');
  return moment().calendar()
});

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
