<template>
	<md-toolbar class="md-primary">
		<h3 class="md-title">
			考生:{{this.$global.information.name}} |
			演奏曲目：{{this.$global.information.subject.subject}}
			{{this.$global.information.vedio.name}}
		</h3>
	</md-toolbar>
</template>

<script>
export default {
    name: "Navigation"
}
</script>

<style scoped>
</style>
