<template>
	<div>
		<navigation></navigation>
		<br>
		<TrackVisualization></TrackVisualization>
		<div class="md-layout md-gutter md-alignment-center-center">
			<div class="md-layout-item md-size-10"></div>
			<div class="md-layout-item md-layout md-alignment-center-center">
				<score-ring></score-ring>
			</div>
			<div class="md-layout-item md-layout md-alignment-center-center">
				<score-ring></score-ring>
			</div>
			<div class="md-layout-item md-layout md-alignment-center-center">
				<score-ring></score-ring>
			</div>
			<div class="md-layout-item md-size-10"></div>
		</div>
		<br><br><br><br><br><br>
		<md-button v-on:click="goto" class="md-raised md-primary">Go Rating</md-button>
		<md-button v-on:click="goto" class="md-raised md-primary">Next Trab</md-button>
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
            this.$router.push({ path: "/CandidateVerify" })
        }
    }
}
</script>

<style scoped>

</style>
