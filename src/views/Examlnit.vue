<template>
	<div :style="formStyle" style="display:flex">
		<div class="md-layout md-gutter" style="margin: auto">
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
    components: { ExamTypeCard },
    computed: {
        formStyle: () => {
            let screenHeight = document.body.clientHeight
            return {
                height: screenHeight + "px"
            }
        }
    }
}
</script>

<style scoped>
#my_container {
    margin: auto;
}
</style>
