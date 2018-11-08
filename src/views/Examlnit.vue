<template>
	<div :style="formStyle" style="display:flex">
		<div class="md-layout md-gutter" style="margin: auto">
			<div v-for="item in list" class="md-layout-item md-xsmall-size-100">
				<exam-type-card></exam-type-card>
			</div>
		</div>
	</div>
</template>

<script>
import ExamTypeCard from "../components/ExamTypeCard"
export default {
    name: "Examlnit",
    components: { ExamTypeCard },
    data: function() {
        return {
            list: [1, 2, 3]
        }
    },
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
@media (max-width: 600px) {
    .md-layout.md-gutter > .md-layout-item {
        margin: 1%;
    }
}
</style>
