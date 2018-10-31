<template>
	<div id="my_container">
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
#my_container {
    margin-top: 60px;
}
</style>
