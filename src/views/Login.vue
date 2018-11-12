<template>
	<components-login></components-login>
</template>

<script>
import ComponentsLogin from "../components/ComponentsLogin"
// import Global from "../assets/Global"
export default {
    name: "Login",
    components: { ComponentsLogin },
    data() {
        return {
            list: [
                // { firstName: "Bill", lastName: "Gates" },
                // { firstName: "George", lastName: "Bush" },
                // { firstName: "Thomas", lastName: "Carter" }
            ]
        }
    }
    // created: function() {
    //     this.getlist()
    // },
    // methods: {
    //     getlist: function() {
    //         let url = Global.apidomain + "/new.json"
    //         this.$http.get(url).then(function(res) {
    //             let body = res.body
    //             this.list = body.list
    //         })
    //     }
    // }
}
</script>

<style scoped>
.my-background {
    background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
        url("../assets/background.jpg");
    background-position: center center;
    background-attachment: fixed;
    background-size: cover;
    background-color: black;
}
</style>
