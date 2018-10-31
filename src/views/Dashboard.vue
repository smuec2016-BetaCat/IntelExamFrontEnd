<template>
	<div>
		<navigation></navigation>
		<TrackVisualization></TrackVisualization>
		<div class="md-layout md-gutter">
			<div class="md-layout-item">
				<score-ring></score-ring>
			</div>
			<div class="md-layout-item">
				<score-ring></score-ring>
			</div>
		</div>
		<br><br><br>
		<md-button v-on:click="goto" class="md-primary md-raised">Go Rating</md-button>
		<md-button v-on:click="goto" class="md-primary md-raised">Next Trab</md-button>
	</div>
</template>

<script>
import TrackVisualization from "../components/TrackVisualization"
import ScoreRing from "../components/ScoreRing"
import Navigation from "../components/Navigation"
export default {
    name: "Dashboard",
    components: { Navigation, ScoreRing, TrackVisualization },
    methods: {
        goto: function() {
            this.$router.push({ path: "/" })
        }
    }
}
</script>

<style scoped>
</style>
