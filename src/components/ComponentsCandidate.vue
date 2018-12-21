<template>
	<div style="display: flex" :style="formStyle" id="my-candidate">
		<div style="margin: auto" class="md-small-size-80 md-xsmall-size-100 md-layout-item md-size-80">
			<md-card class="md-elevation-2">
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
							<template slot="value">{{information.subject}}</template>
						</Table>
						<Table>
							<template slot="key">考试地点:</template>
							<template slot="value">{{information.place}}</template>
						</Table>
						<Table>
							<template slot="key">考试时间:</template>
							<template slot="value">{{information.time}}</template>
						</Table>
					</div>
					<div class="md-layout-item md-elevation-1 md-size-25" style="margin: auto">
						<md-card-media>
							<img src="../assets/person.png" alt="People">
						</md-card-media>
					</div>
					<div class="md-layout-item md-size-5"></div>
				</div>
				<md-card-actions style="margin: 0 20px">
					<md-button class="md-accent md-raised" v-on:click=messagewarn>学生缺考 | 下一位考生</md-button>
					<md-button class="md-primary md-raised" v-on:click="goto">确认信息 | 准备考试</md-button>
				</md-card-actions>
			</md-card>
		</div>
	</div>
</template>

<script>
import axios from "axios"
import Table from "./table";
export default {
    name: "ComponentsCandidate",
    components: { Table },
    data: function() {
        return {
            information: {
                ticket_number: 6551310015040264,
                name: "杨机智",
                identity_number: 310102199807223104,
                subject: "三级钢琴考试",
                place: "上海市浦东新区上海海事大学",
                time: "2018年12月21日16:00",
                sex: "男"
            }
        }
    },
    methods: {
        goto() {
            this.$router.push({ path: "/Dashboard" })
        },
        messagewarn() {
            alert("Something is wrong with the information of this Candidate!")
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
        axios
            .get("/info")
            .then(response => {
                this.info = response.data.message
            })
            .catch(error => {
                console.log(error)
                console.log("非局域网ajax无法请求")
            })
            .then(function() {
                console.log("ajax has been done")
            })
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
</style>
