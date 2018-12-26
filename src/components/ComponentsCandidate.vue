<template>
	<div style="display: flex" :style="formStyle" id="my-candidate">
		<div style="margin: auto" class="md-small-size-80 md-xsmall-size-100 md-layout-item md-size-80">
			<md-card class="md-elevation-2" style="opacity: 0.95">
				<div style="padding: 30px 0 20px 0">
					<h1 style="margin: 0;">2018年12月全国音乐考试考生信息</h1>
				</div>
				<div class="md-layout md-alignment-top-center my_container">
					<div class="md-layout-item md-size-10"></div>
					<div class="md-layout-item  md-size-60 mustleft">
						<Table>
							<template slot="key">准考证号:</template>
							<template slot="value">{{information.ticket_number}}</template>
						</Table>
						<Table>
							<template slot="key">身份证号:</template>
							<template slot="value">{{information.identity_number}}</template>
						</Table>
						<Table>
							<template slot="key">姓名:</template>
							<template slot="value">{{information.name}}</template>
						</Table>
						<Table>
							<template slot="key">性别:</template>
							<template slot="value">{{information.sex}}</template>
						</Table>
						<Table>
							<template slot="key">科目:</template>
							<template slot="value">{{information.subject.subject}}|{{information.vedio.name}}</template>
						</Table>
						<Table>
							<template slot="key">考试地点:</template>
							<template slot="value">{{information.address}}</template>
						</Table>
						<Table>
							<template slot="key">考试时间:</template>
							<template slot="value">{{information.examination_time}}</template>
						</Table>
					</div>
					<div class="md-layout-item md-elevation-1 md-size-20" style="margin: auto">
						<md-card-media>
							<img src="../assets/person1.png" alt="People">
						</md-card-media>
					</div>
					<div class="md-layout-item md-size-5"></div>
				</div>
				<md-card-actions style="margin: 0 20px">
					<md-button class="md-accent md-raised" v-on:click="next">学生缺考 | 下一位考生</md-button>
					<md-button class="md-primary md-raised" v-on:click="goto">确认信息 | 准备考试</md-button>
					<md-dialog :md-active.sync="showDialog">
						<md-dialog-title>考试结束！</md-dialog-title>

						<md-dialog-content>没有更多的考生了。</md-dialog-content>

						<md-dialog-actions>
							<md-button class="md-primary" @click="back">确定 | 返回登录</md-button>
						</md-dialog-actions>
					</md-dialog>
				</md-card-actions>
			</md-card>
		</div>
	</div>
</template>

<script>
import axios from "axios"
import Table from "./table"
export default {
    name: "ComponentsCandidate",
    components: { Table },
    data: function() {
        return {
            information: {
	            id: 0,
	            identity_number: "无",
	            ticket_number: "无",
	            name: "无",
	            sex: "无",
	            age: null,
	            phone: "无",
	            address: "无",
	            email: "无",
	            examination_time: "无",
	            grades: 0,
	            vedio_id: 1,
	            examination_status: 0,
	            photo_id: 1,
	            teacher_id: 1,
	            photo: {
		            id: 1,
		            url: "www.baidu.com"
	            },
	            vedio: {
		            id: 1,
		            name: "无",
		            url: "www.baidu.com",
		            subject_id: 1
	            },
	            subject: {
		            id: 1,
		            subject: "无 "
	            }
            },
	        showDialog: false
        }
    },
    methods: {
        goto() {
            this.$router.push({ path: "/Dashboard" })
        },
	    back(){
            this.$router.push({path:'/'})
	    },
        next() {
            axios.post("/candidate", {
                id: this.information.id,
                grade: 0,
                status: 1
            })
	            .then(response=>{
		            this.getInformation()
	            })
        },
        getInformation() {
            axios.get("/candidate",{
	            params: {
		            teacher_id: this.$global.teacher.id
	            }
            })
	            .then(response => {
            	if (response.data.information === "null"){
					this.showDialog = true
	            }
            	else {
		            this.information = response.data.information
		            this.$global.setInformation(this.information)
	            }
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
	mounted:function(){
		this.getInformation()
	},
    created: function() {
        this.t = setInterval(this.screenChange, 2000)
    },
    beforeDestroy: function() {
        clearInterval(this.t)
    }
}
</script>

<style scoped>
.my_container {
    padding: 0 10px 5px 10px;
}
.mustleft {
    text-align: left;
}
#my_candidate{
	opacity: 0.5;
}
</style>
