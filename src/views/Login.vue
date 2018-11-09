<template>
	<div>
		<!--<components-login></components-login>-->
		<div v-for="item in list">
			<ul>
				<li>{{item.firstName}}</li>
				<li>{{item.lastName}}</li>
			</ul>
		</div>
	</div>
</template>

<script>
import ComponentsLogin from "../components/ComponentsLogin"
import Global from "../assets/Global"
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
    },
    created: function() {
        this.getlist()
    },
    methods: {
        getlist: function() {
            let url = Global.apidomain + "/new.json"
            this.$http.get(url).then(function(res) {
                let body = res.body
                this.list = body.employees
            })
        }
    }
}
</script>

<style scoped>
</style>
