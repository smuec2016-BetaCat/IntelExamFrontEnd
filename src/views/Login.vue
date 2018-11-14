<template>
	<div class="my-background">
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
.my-background {
    background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
        url("../assets/background.jpg");
    background-position: center center;
    background-attachment: fixed;
    background-size: cover;
    background-color: black;
}
</style>
