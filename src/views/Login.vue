<template>
	<div id="my_container">
		<components-login></components-login>
	</div>
</template>

<script>
import ComponentsLogin from "../components/ComponentsLogin"
export default {
    name: "Login",
    components: { ComponentsLogin }
}
</script>

<style scoped>
#my_container {
    margin-top: 60px;
}
</style>
