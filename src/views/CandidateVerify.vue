<template>
	<div class="back_ground">
		<components-candidate></components-candidate>
	</div>
</template>

<script>
import ComponentsCandidate from "../components/ComponentsCandidate"
export default {
    name: "CandidateVerify",
    components: { ComponentsCandidate }
}
</script>

<style scoped>
.back_ground{
	background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
	url("../assets/background.jpg");
	background-position: center center;
	background-attachment: fixed;
	background-size: cover;
	background-color: black;
}
</style>
