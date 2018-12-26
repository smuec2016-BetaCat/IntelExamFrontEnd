<template>
	<div class="my-background">
		<div style="display: flex" :style="formStyle" id="my-candidate">
			<div style="margin: auto" class="md-small-size-80 md-xsmall-size-100 md-layout-item md-size-80">
				<md-card class="md-elevation-2" style="opacity: 0.95">

					<div class="md-layout md-gutter md-alignment-center-center">
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
							<!--<score-ring></score-ring>-->
						</div>
					</div>

					<br><br>
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
export default {
    name: "Dashboard",
    components: { Navigation, ScoreRing, TrackVisualization },
    data() {
        return {
            active: false,
            value: null,
	        showDialog:false,
	        flag:false,
	        second:false
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
	    }
    },
    computed: {
		formStyle: () => {
			let screenHeight = document.body.clientHeight
			return {
				height: screenHeight + "px"
			}
		}
	},
	created: function() {
		this.t = setInterval(this.screenChange, 2000)
	},
	beforeDestroy: function() {
		clearInterval(this.t)
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
.my-background {
	background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
	url("../assets/background.jpg");
	background-position: center center;
	background-attachment: fixed;
	background-size: cover;
	background-color: black;
}
.singer{
	width: 250px;
	height: 250px;
	position: relative;
	background: url("../assets/singer.png") no-repeat;
	background-size: 100% 100%;
	border-radius: 50%;
}
.singerImg{
	width: 200px;
	height: 200px;
	position: absolute;
	left: 0;
	top: 0;
	right: 0;
	bottom: 0;
	margin: auto;
	border-radius: 50%;
}
img{
	max-height: 100%;
	max-width: 100%;
	height: 100%;
	width: 100%;
}
.rotate{
	animation: rotate 20s linear infinite;
}
@keyframes rotate {
	0% {
		transform: rotate(0deg);
	}
	100% {
		transform: rotate(360deg);
	}
}
</style>
