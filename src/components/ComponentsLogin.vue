<!--suppress ALL -->
<template>
	<form v-bind:style="formStyle"  class="md-layout my-background" id="my-form">
		<md-card class="md-layout-item md-size-40 md-small-size-60 md-xsmall-size-100" style="margin: auto">
			<md-card-header>
				<div class="md-title">考官登录</div>
			</md-card-header>

			<md-card-content>
				<div class="md-layout md-gutter">
					<div class="md-layout-item md-small-size-100">
						<md-field>
							<label for="name">UserName</label>
							<md-input name="name" id="name" autofocus="autofocus"/>
						</md-field>
					</div>
				</div>

				<div class="md-layout md-gutter">
					<div class="md-layout-item md-small-size-100">
						<md-field>
							<label>Password</label>
							<md-input type="password"></md-input>
						</md-field>
					</div>
				</div>
			</md-card-content>

			<md-card-actions>
				<md-button class="md-primary">
					<router-link to="/CandidateVerify">Log IN</router-link>
				</md-button>
			</md-card-actions>
		</md-card>
	</form>
</template>

<script>
import { required, minLength } from "vuelidate/lib/validators"
export default {
    name: "ComponentsLogin",
    data() {
        return {
            name: null,
            password: null
        }
    },
    validations: {
        name: {
            required,
            minLength: minLength(4)
        },
        password: {
            required
        }
    },
    methods: {
        screenChange: function() {
            document.getElementById("my-form").style.height =
                window.innerHeight + "px"
        },
        PostAndLog: function() {
            if (this.name === null && this.password === null) {
                this.$v.$touch()
            } else if (!this.$v.name.$invalid && !this.$v.password.$invalid) {
                // push the form
                this.goto()
            }
        },
        goto: function() {
            this.$router.push({ path: "/CandidateVerify" })
        }
    },
    computed: {
        formStyle: () => {
            let screenHeight = document.body.clientHeight
            return {
                height: screenHeight + "px"
            }
        }
    },
    created: function() {
        this.t = setInterval(this.screenChange, 2000)
    },
    beforeDestroy: function() {
        clearInterval(this.t)
    }
}
</script>

<style scoped>
/*.md-card{*/
/*background-color: saddlebrown;*/
/*}*/
.my-background {
    background: url("../assets/background.jpg") no-repeat;
    background-size: 100% 100%;
}
</style>
