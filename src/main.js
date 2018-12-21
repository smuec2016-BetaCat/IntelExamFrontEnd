// The main entrance to the program, import the package we need
import Vue from "vue"
import App from "./App.vue"
import router from "./router"
import ECharts from "vue-echarts/components/ECharts"
import VueMaterial from "vue-material"
import "vue-material/dist/vue-material.min.css"
// import "../node_modules/@fortawesome/fontawesome-free/css/all.min.css"
import Vuelidate from "vuelidate"
import global from "./global"
// axios.defaults.baseURL = "http://localhost:8080"

Vue.use(Vuelidate)
Vue.use(VueMaterial)
Vue.config.productionTip = false
Vue.component("v-chart", ECharts)
Vue.prototype.$global = global

new Vue({
    router,
    render: h => h(App)
}).$mount("#app")
