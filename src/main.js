import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import Lista from './components/Listar'
import Cadastro from './components/Cadastra'


Vue.use(VueRouter);

const router = new VueRouter({
  routes: [
    {
      path: '/listar',
      component: Lista
    },
    {
      path: '/',
      redirect: '/listar'
    },
    {
      path: '/cadastro',
      component: Cadastro
    }
  ]
})

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
