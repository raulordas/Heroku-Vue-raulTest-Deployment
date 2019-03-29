import Vue from 'vue'
import VueFire from 'vuefire'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false
Vue.use(VueFire)

new Vue({
    router,
    render: function (h) {
        return h(App)
    }
}).$mount('#app')
