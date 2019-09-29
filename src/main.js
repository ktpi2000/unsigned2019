import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Buefy from 'buefy'
import 'buefy/dist/buefy.css'
import VueBlockReveal from 'vue-block-reveal'
import VueAnalytics from 'vue-analytics'
import './registerServiceWorker'

Vue.use(Buefy)

Vue.config.productionTip = false

Vue.use(VueBlockReveal, {
  direction: 'lr',
  bgcolor: '#9b003f'
});

Vue.use(VueAnalytics, {
  id: 'UA-126717108-2',
  router
});

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
