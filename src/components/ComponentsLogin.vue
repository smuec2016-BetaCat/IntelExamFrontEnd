<template>
	<div>
		<form>
			<div class="md-layout md-alignment-center-center">
				<md-card class="md-layout-item md-size-40 md-small-size-100">
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
							<router-link to="/Examlnit">Log IN</router-link>
						</md-button>
					</md-card-actions>
				</md-card>
			</div>
		</form>
	</div>
</template>

<script>
export default {
    name: "ComponentsLogin"
}
</script>

<style scoped>
</style>
