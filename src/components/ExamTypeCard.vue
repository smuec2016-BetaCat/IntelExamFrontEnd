<template>
	<div class="md-layout-item" v-on:click="goto">
		<md-card class="md-elevation-6 md-with-hover md-accent">
			<md-ripple>
				<md-card-header>
					<div class="md-title">Exam Type</div>
					<div class="md-subhead">Some message</div>
				</md-card-header>
				<md-card-content>
					More message.More message.More message.
					More message.More message.More message.
					More message.More message.More message.
					More message.More message.More message.
					More message.More message.More message.
					More message.More message.More message.
				</md-card-content>
			</md-ripple>
		</md-card>
	</div>
</template>

<script>
export default {
    name: "ExamTypeCard",
    methods: {
        goto: function() {
            const that = this
            setTimeout(function() {
                that.$router.push({ path: "/Dashboard" })
            }, 500)
        }
    }
}
</script>

<style scoped>
</style>
