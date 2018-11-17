<template>
	<div>
		<ExamTypeCard></ExamTypeCard>
	</div>
</template>

<script>
import ExamTypeCard from "../components/ExamTypeCard"
export default {
    name: "Examlnit",
    components: { ExamTypeCard },
}
</script>

<style scoped>
#my_container {
    margin: auto;
}
@media (max-width: 600px) {
    .md-layout.md-gutter > .md-layout-item {
        margin: 1%;
    }
}
</style>
