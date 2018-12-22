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
				@md-confirm="postGrade"
				v-model="value"
				md-title="请您输入最终评分"
				md-input-placeholder="请输入百分制的评分......"
				md-confirm-text="确认"
				md-cancel-text="取消"/>
		<md-button class="md-primary md-raised" @click="active = true">打分</md-button>
		<md-button v-on:click="goto" class="md-raised md-primary">下一位考生</md-button>
		<md-dialog :md-active.sync="showDialog">
			<md-dialog-title>提交成功！</md-dialog-title>

			<md-dialog-content>{{this.$global.information.name}}的成绩为{{this.value}}分</md-dialog-content>

			<md-dialog-actions>
				<md-button class="md-primary" @click="showDialog=false">确定</md-button>
			</md-dialog-actions>
		</md-dialog>
	</div>
</template>

<script>
import TrackVisualization from "../components/TrackVisualization"
import ScoreRing from "../components/ScoreRing"
import Navigation from "../components/Navigation"
import axios from 'axios'
export default {
    name: "Dashboard",
    components: { Navigation, ScoreRing, TrackVisualization },
    data() {
        return {
            active: false,
            value: null,
	        showDialog:false
        }
    },
    methods: {
        goto: function() {
            this.$router.push({ path: "/CandidateVerify" })
        },
	    postGrade(){
        	axios.post('/',{
		        id: this.$global.information.id,
		        grade: this.value,
		        status: 2
	        })
		        .then(response=>{
		        	this.showDialog = true
		        })
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
