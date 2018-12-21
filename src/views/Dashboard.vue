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
		<md-button v-on:click="goto" class="md-raised md-primary">开始考试</md-button>
		<md-button v-on:click="goto" class="md-raised md-primary">重置</md-button>
		<md-dialog-prompt
				:md-active.sync="active"
				v-model="value"
				md-title="请您输入最终评分"
				md-input-placeholder="请输入百分制的评分......"
				md-confirm-text="确认"
				md-cancel-text="取消"/>
		<md-button class="md-primary md-raised" @click="active = true">打分</md-button>
		<md-button v-on:click="goto" class="md-raised md-primary">下一位考生</md-button>
	</div>
</template>

<script>
import TrackVisualization from "../components/TrackVisualization"
import ScoreRing from "../components/ScoreRing"
import Navigation from "../components/Navigation"
export default {
    name: "Dashboard",
    components: { Navigation, ScoreRing, TrackVisualization },
    data() {
        return {
            active: false,
            value: null
        }
    },
    methods: {
        goto: function() {
            this.$router.push({ path: "/CandidateVerify" })
        }
    }
}
</script>

<style>
.md-title{
    font-size: 1.2em;
    font-weight: 500;
    letter-spacing: 0.005em;
    line-height: 26px;
}
</style>
