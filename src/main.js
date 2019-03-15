import Vue from 'vue'
import App from './App.vue'
import Vuex from 'vuex'
Vue.use(Vuex)
import { store } from './store'


//Importamos tailwind
import "@/assets/tailwind.css"


import VModal from 'vue-js-modal'
Vue.use(VModal)

Vue.config.productionTip = false

Vue.use(store)




new Vue({
  store,
  render: h => h(App),
}).$mount('#app')
