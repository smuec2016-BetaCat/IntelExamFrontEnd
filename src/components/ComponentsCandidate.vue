<template>
	<div style="display: flex" :style="formStyle" id="my-candidate">
		<div style="margin: auto" class="md-small-size-80 md-xsmall-size-100 md-layout-item md-size-90">
			<md-card>
				<div class="md-layout md-gutter md-alignment-top-center my_container">
					<div class="md-layout-item md-size-5"></div>
					<div class="md-layout-item md-elevation-1 md-size-25" style="margin: auto">
						<md-card-media>
							<img src="../assets/person.png" alt="People">
						</md-card-media>
					</div>
					<div class="md-layout-item md-size-10"></div>
					<div class="md-layout-item  md-size-60 mustleft">
						<h1>考生信息</h1>
						<h2>姓名: {{info.name}}</h2>
						<h2>性别: {{info.sex}}</h2>
						<h2>考试内容 :{{info.content}} </h2>
						<h2>详情：{{info.details}}</h2>
					</div>
				</div>
				<md-card-actions>
					<md-button class="md-accent md-raised" v-on:click=messagewarn>Something wrong</md-button>
					<md-button class="md-primary md-raised" v-on:click="goto">Go to Next Step</md-button>
				</md-card-actions>
			</md-card>
		</div>
	</div>
</template>

<script>
const axios = require("axios")
export default {
    name: "ComponentsCandidate",
    data: function() {
        return {
            info: {}
        }
    },
    methods: {
        goto() {
            this.$router.push({ path: "/Examlnit" })
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
    padding: 3% 2%;
}
.mustleft {
    text-align: left;
}
</style>
