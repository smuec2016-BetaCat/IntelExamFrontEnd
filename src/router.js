import Vue from "vue"
import Router from "vue-router"
import Login from "./views/Login"
import Examlnit from "./views/Examlnit"
import CandidateVerify from "./views/CandidateVerify"
import Dashboard from "./views/Dashboard"

Vue.use(Router)
// the place to set the routes, in order to set the component, you should import first
export default new Router({
    routes: [
        {
            path: "/",
            name: "Login",
            component: Login
        },
        {
            path: "/Examlnit",
            name: "Examlnit",
            component: Examlnit
        },
        {
            path: "/CandidateVerify",
            name: "CandidateVerify",
            component: CandidateVerify
        },
        {
            path: "/Dashboard",
            name: "",
            component: Dashboard
        },
        {
            path: "/about",
            name: "about",
            // route level code-splitting
            // this generates a separate chunk (about.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: () =>
                import(/* webpackChunkName: "about" */ "./views/About.vue")
        }
    ]
})
