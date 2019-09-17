import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Buefy from 'buefy'
import 'buefy/dist/buefy.css'
import VueBlockReveal from 'vue-block-reveal'

Vue.use(Buefy)

Vue.config.productionTip = false

Vue.use(VueBlockReveal, {
  direction: 'lr',
  bgcolor: 'red'
});

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
