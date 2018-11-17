<template>
	<div :style="formStyle" style="display:flex" id="my-candidate">
		<div class="md-layout md-gutter" style="margin: auto">
			<div v-for="msg in info" class="md-layout-item md-xsmall-size-100">
				<div class="md-layout-item" v-on:click="goto">
					<md-card class="md-elevation-6 md-with-hover md-accent">
						<md-ripple>
							<md-card-header>
								<div class="md-title">{{msg.examType}}</div>
								<div class="md-subhead">{{msg.msg}}</div>
							</md-card-header>
							<md-card-content>
								{{msg.details}}
							</md-card-content>
						</md-ripple>
					</md-card>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
const axios = require("axios")
import global from "../Global"
export default {
    name: "ExamTypeCard",
    data() {
        return {
            info: []
        }
    },
    methods: {
        goto: function() {
            const that = this
            setTimeout(function() {
                that.$router.push({ path: "/Dashboard" })
            }, 500)
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
            .get(global.apidomain + "/message")
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
</style>
