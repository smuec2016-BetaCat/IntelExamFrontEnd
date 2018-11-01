<template>
	<div>
		<!--<div id="waveform"></div>-->
		<!--<p align="center">-->
			<!--<button class="btn btn-primary" onclick="wavesurfer.playPause()">-->
				<!--Play-->
			<!--</button>-->
		<!--</p>-->
		<div class="md-layout md-alignment-center-center">
			<md-button class="md-raised my_box" disabled>Disabled</md-button>
		</div>
		<div class="md-layout md-alignment-center-center">
			<md-button class="md-raised my_box" disabled>Disabled</md-button>
		</div>
	</div>
</template>

<script>
export default {
    name: "TrackVisualization",


}
</script>

<style scoped>
.my_box {
height: 100px;
width: 80%;
margin: 1% 2%;
}
</style>
