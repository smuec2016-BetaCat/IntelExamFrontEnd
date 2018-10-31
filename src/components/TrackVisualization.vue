<template>
	<div>
		<!--&lt;!&ndash;<div class="md-layout md-alignment-center-center">&ndash;&gt;-->
		<!--<div id="waveform"></div>-->
		<!--<button class="btn btn-primary" onclick="wavesurfer.playPause()">-->
			<!--Play-->
		<!--</button>-->
		<!--</div>-->
		<!--<div class="md-layout md-alignment-center-center">-->
			<!--<md-button class="md-raised my_box" disabled>Disabled Here has a picture</md-button>-->
		<!--</div>-->
	</div>
</template>

<script>
// import WaveSurfer from "../wave.min"
// var wavesurfer = WaveSurfer.create({
//     container: "#waveform",
//     waveColor: "darkorange",
//     progressColor: "purple",
//     splitChannels: true,
//     height: 64
// })
// wavesurfer.load("https://wavesurfer-js.org/example/split-channels/stereo.mp3")
export default {
    name: "TrackVisualization"
}
</script>

<style scoped>
.my_box {
    height: 100px;
    width: 80%;
    margin: 1% 2%;
}
</style>
