<template>
	<form v-bind:style="formStyle" class="md-layout my-background" id="my-form">
		<md-card class="md-layout-item md-size-30 md-small-size-60 md-xsmall-size-100" style="margin: auto">
			<md-card-header>
				<div class="md-title">考官登录</div>
			</md-card-header>

			<md-card-content>
				<div class="md-layout md-gutter">
					<div class="md-layout-item md-small-size-100">
						<md-field>
							<label for="name">UserName</label>
							<md-input type="name" id="name" v-model.trim="$v.name.$model"/>
							<span class="error" v-if="!$v.name.required&&$v.name.$anyDirty">UserName is required</span>
							<span class="error" v-if="!$v.name.minLength">Name must have at least {{$v.name.$params.minLength.min}} letters.</span>
						</md-field>
					</div>
				</div>

				<div class="md-layout md-gutter">
					<div class="md-layout-item md-small-size-100">
						<md-field>
							<label for="password">Password</label>
							<md-input type="password" id="password" v-model.trim="$v.password.$model"/>
							<span class="error" v-if="!$v.password.required && $v.password.$anyDirty">Password is required</span>
							<span class="error2" v-if="$v.password.$invalid && $v.name.$invalid && $v.dirty">You should fill in the blanks of UserName and Password</span>
						</md-field>
					</div>
				</div>
			</md-card-content>

			<md-card-actions>
				<md-button class="md-primary" @click="PostAndLog">Log in</md-button>
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
.my-background {
    background: url("../assets/background.jpg") no-repeat;
    background-size: 100% 100%;
}
.error {
    color: red;
    height: 20px;
    position: absolute;
    bottom: -22px;
}
.error2 {
    color: red;
    height: 20px;
    position: absolute;
    bottom: -44px;
}
</style>
