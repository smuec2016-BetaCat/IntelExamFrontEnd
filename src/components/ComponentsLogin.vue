<!--suppress ALL -->
<template>
	<form v-bind:style="formStyle"  class="md-layout" id="my-form">
		<md-card class="md-layout-item md-size-30 md-small-size-50 md-xsmall-size-100" style="margin: auto">
			<md-card-header>
				<div class="md-title">考官登录</div>
			</md-card-header>

			<md-card-content>
				<div class="md-layout md-gutter">
					<div class="md-layout-item md-small-size-100">
						<md-field>
							<label for="name">工号</label>
							<md-input name="name" id="name" autofocus="autofocus"/>
						</md-field>
					</div>
				</div>

				<div class="md-layout md-gutter">
					<div class="md-layout-item md-small-size-100">
						<md-field>
							<label>密码</label>
							<md-input type="password"></md-input>
						</md-field>
					</div>
				</div>
			</md-card-content>

			<md-card-actions>
				<md-button class="md-primary">
					<router-link to="/CandidateVerify">登录</router-link>
				</md-button>
			</md-card-actions>
		</md-card>
	</form>
</template>

<script>
export default {
    name: "ComponentsLogin",
    methods: {
        screenChange: function() {
            document.getElementById("my-form").style.height =
                window.innerHeight + "px"
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
    // when the second loop , this is the first page we see
    created: function() {
        this.t = setInterval(this.screenChange, 2000)
    },
    beforeDestroy: function() {
        clearInterval(this.t)
    }
}
</script>

<style scoped>
</style>
