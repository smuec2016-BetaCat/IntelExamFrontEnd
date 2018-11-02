<template>
	<form v-bind:style="formStyle"  class="md-layout my-background">
		<md-card class="md-layout-item md-size-40 md-small-size-60 md-xsmall-size-100" style="margin: auto">
			<md-card-header>
				<div class="md-title">The platform for teachers</div>
			</md-card-header>

			<md-card-content>
				<div class="md-layout md-gutter">
					<div class="md-layout-item md-small-size-100">
						<md-field>
							<label for="first-name">UserName</label>
							<md-input name="first-name" id="first-name"/>
						</md-field>
					</div>
				</div>

				<div class="md-layout md-gutter">
					<div class="md-layout-item md-small-size-100">
						<md-field>
							<label>Password</label>
							<md-input v-model="password" type="password"></md-input>
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
export default {
    name: "ComponentsLogin",
    computed: {
        formStyle: () => {
            let screenHeight = document.body.clientHeight
            window.onresize = function() {
                this.screenHeight = document.body.clientHeight
            }
            return {
                height: screenHeight + "px"
            }
        }
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
