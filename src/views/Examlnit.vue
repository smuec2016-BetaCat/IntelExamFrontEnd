<template>
	<div>
		<div class="md-layout md-gutter" id="my_container">
			<exam-type-card></exam-type-card>
			<exam-type-card></exam-type-card>
			<exam-type-card></exam-type-card>
			<exam-type-card></exam-type-card>
		</div>
	</div>
</template>

<script>
import ExamTypeCard from "../components/ExamTypeCard"
export default {
    name: "Examlnit",
    components: { ExamTypeCard }
}
</script>

<style scoped>
#my_container {
    margin: 10% 2%;
}
</style>
