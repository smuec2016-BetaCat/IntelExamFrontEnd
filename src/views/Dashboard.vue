<template>
	<div class="my-background">
		<link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
		<div style="display: flex" :style="formStyle" id="my-candidate">
			<div style="margin: auto" class="md-small-size-80 md-xsmall-size-100 md-layout-item md-size-80">
				<md-card class="md-elevation-2" style="opacity: 0.95">

					<div class="md-layout md-alignment-center-center">
						<div class="md-layout-item">
							<div style="display: flex;height: 300px">
								<div style="margin: auto;">
									<div class="singer">
										<img src="../assets/bdf.jpg" alt="" class="singerImg rotate">
									</div>
								</div>
							</div>

						</div>
						<div class="md-layout-item md-layout md-alignment-center-center">
							<md-list>
								<md-list-item>
									<div class="md-title">
										{{this.$global.information.subject.subject}} |
										 {{this.$global.information.vedio.name}}
									</div>
								</md-list-item>
								<md-list-item class="md-body-2">
									<Timer ref="timer"></Timer>
								</md-list-item>
								<md-list-item>
									<div style="display: flex ">
										<i class="material-icons" style="margin: auto;" :class="{'record':record}">
										fiber_manual_record
										</i>
										<span style="margin: auto">清晰度 ：100</span>
									</div>
								</md-list-item>
							</md-list>
						</div>
					</div>

					<md-button v-on:click="start" class="md-raised md-primary">{{timing?"停止考试":"开始考试"}}</md-button>
					<md-button v-on:click="reset" v-if="!timing" class="md-raised md-primary" disabled>重置</md-button>
					<md-button v-on:click="reset" v-if="timing" class="md-raised md-primary">重置</md-button>
					<md-dialog :md-active.sync="showDialog1" style="width: 400px;max-height: 90%">
						<md-dialog-title style="margin: auto">考官评分</md-dialog-title>

						<md-content style="margin: 0 20px;">

							<div>
								<div class="md-layout md-alignment-center-center">
									<div class="md-layout-item">
										<div style="display: flex ">
											<md-icon class="material-icons md-size-3x" style="margin: auto;">
												queue_music
											</md-icon>
											<span style="margin: auto">节奏 ：{{form.rhythm}}</span>
										</div>
									</div>
									<div class="md-layout-item">
										<div style="display: flex ">
											<md-icon class="material-icons md-size-3x" style="margin: auto;">
												music_note
											</md-icon>
											<span style="margin: auto">音准 ：{{form.pitch}}</span>
										</div>
									</div>
								</div>
							</div>


							<md-field>
								<label>节奏</label>
								<md-input v-model="form.rhythm"></md-input>
							</md-field>

							<md-field>
								<label>音准</label>
								<md-input v-model="form.pitch"></md-input>
							</md-field>

							<md-field>
								<label>现场表现</label>
								<md-input v-model="form.performance"></md-input>
							</md-field>

							<md-field>
								<label>仪表</label>
								<md-input v-model="form.meter"></md-input>
							</md-field>

							<md-field>
								<label>指法</label>
								<md-input v-model="form.fingering"></md-input>
							</md-field>

						</md-content>

						<md-dialog-actions>
							<md-button class="md-primary" @click="showDialog1 = false">取消</md-button>
							<md-button class="md-primary md-raised" @click="postGrade">提交成绩</md-button>
						</md-dialog-actions>
					</md-dialog>

					<md-button class="md-primary md-raised" @click="showDialog1 = true">打分</md-button>
					<md-button v-on:click="goto" class="md-raised md-primary">下一位考生</md-button>
					<md-dialog :md-active.sync="showDialog">
						<md-dialog-title>提交成功！</md-dialog-title>

						<md-dialog-content>{{this.$global.information.name}}的成绩为{{this.value}}分</md-dialog-content>

						<md-dialog-actions>
							<md-button class="md-primary" @click="showDialog=false">确定</md-button>
						</md-dialog-actions>
					</md-dialog>
					<md-dialog-alert
							:md-active.sync="second"
							md-content="您还未给<strong>考生</strong>打分！" />
				</md-card>

			</div>
		</div>
	</div>
</template>

<script>
import TrackVisualization from "../components/TrackVisualization"
import ScoreRing from "../components/ScoreRing"
import Navigation from "../components/Navigation"
import axios from 'axios'
import Timer from "../components/Timer";
export default {
    name: "Dashboard",
    components: {Timer, Navigation, ScoreRing, TrackVisualization },
    data() {
        return {
            active: false,
	        showDialog:false,
			showDialog1:false,
	        flag:false,
	        second:false,
	        timing:false,
			myRecord:false,
			form:{
            	performance:null,
				meter: null,
				rhythm:80,
				fingering:null,
				pitch:80
			}
        }
    },
    methods: {
        goto: function() {
        	if (this.flag){
		        this.$router.push({ path: "/CandidateVerify" })
	        }
        	else {
        		this.second = true
	        }

        },
	    postGrade(){
        	this.showDialog1 = false
        	axios.post('/candidate',{
		        id: this.$global.information.id,
		        grade: this.value,
		        status: 2
	        })
		        .then(response=>{
		        	this.showDialog = true
			        this.flag = true
		        })
	    },
	    screenChange() {
		    document.getElementById("my-candidate").style.height =
			    window.innerHeight + "px"
	    },
	    start(){
        	this.timing = !this.timing
        	this.$refs.timer.startBtnClicked()
			if (this.timing){
				this.h = setInterval(this.changeRecord, 1000)
			}
			else {
				this.myRecord = false
				clearInterval(this.h)
			}

	    },
	    reset(){
        	this.timing = false
		    this.$refs.timer.resetBtnClicked()
			this.myRecord = false
			clearInterval(this.h)
	    },
		changeRecord(){
        	this.myRecord = !this.myRecord
		}
    },
    computed: {
		formStyle: () => {
			let screenHeight = document.body.clientHeight
			return {
				height: screenHeight + "px"
			}
		},
		record(){
			return this.myRecord
		},
		value(){
			let p = this.form.performance
			let f = this.form.fingering
			let m = this.form.meter
			let h = this.form.pitch
			let r = this.form.rhythm
			return p*0.1+f*0.15+m*0.05+r*0.35+r*0.25
		}
	},
	created: function() {
		this.t = setInterval(this.screenChange, 2000)
	},
	beforeDestroy: function() {
		clearInterval(this.t)
		clearInterval(this.h)
	}
}
</script>

<style>
.record{
	color: red;
}
.md-title{
    font-size: 1.2em;
    font-weight: 500;
    letter-spacing: 0.005em;
    line-height: 26px;
}
.my-background {
	background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
	url("../assets/background.jpg");
	background-position: center center;
	background-attachment: fixed;
	background-size: cover;
	background-color: black;
}
.singer{

}
img{
	max-height: 100%;
	max-width: 100%;
	height: 100%;
	width: 100%;
}
</style>
