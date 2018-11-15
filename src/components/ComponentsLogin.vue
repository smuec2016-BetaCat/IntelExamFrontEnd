<!--suppress ALL -->
<template>
	<form v-bind:style="formStyle"  class="md-layout" id="my-form">
		<md-card class="md-layout-item md-size-25 md-small-size-50 md-xsmall-size-100" style="margin: auto">
			<md-card-header>
				<div class="md-title">考官登录</div>
			</md-card-header>

			<md-card-content>
				<div class="md-layout md-gutter">
					<div class="md-layout-item md-small-size-100">
						<md-field>
							<label for="name">工号</label>
							<md-input name="name" id="name" autofocus="autofocus" v-model.trim="$v.form.myname.$model"/>
							<div class="error" v-if="!$v.form.myname.required && $v.form.myname.$anyDirty">您必须填写工号</div>
							<div class="error" v-if="!$v.form.myname.numeric && $v.form.myname.$anyDirty">工号必须为数字</div>
						</md-field>
					</div>
				</div>

				<div class="md-layout md-gutter">
					<div class="md-layout-item md-small-size-100">
						<md-field>
							<label>密码</label>
							<md-input type="password" v-model.trim="$v.form.password.$model" v-on:click="slidebar"></md-input>
							<div class="error" v-if="!$v.form.password.required && $v.form.password.$anyDirty">您必须填写密码</div>
							<!--<div class="error2" v-if="$v.form.$error">工号或者密码填写错误</div>-->
							<div class="error2" v-if="!dataFromChild && $v.form.password.$anyDirty">您需要通过以下验证</div>
						</md-field>
					</div>
				</div>
				<br>
				<div class="md-layout md-gutter">
					<div class="md-layout-item md-small-size-100">
						<slider-validation v-if="slide" v-on:listenToChildEvent="showMsgFromChild"></slider-validation>
					</div>
				</div>
			</md-card-content>

			<md-card-actions>
				<md-button class="md-primary md-raised" @click="PostAndLog">登陆</md-button>
			</md-card-actions>
		</md-card>
	</form>
</template>

<script>
import { required , numeric } from 'vuelidate/lib/validators'
import SliderValidation from "./Slidervalidation";
import {confirmSuccess} from "./Slidervalidation";
export default {
    name: "ComponentsLogin",
    components: {SliderValidation},
    data() {
        return {
            slide:false,
			dataFromChild: false,
			flag:true,
            form: {
                myname: "",
                password: ""
    		}
        }
    },
    validations: {
        form: {
            myname: {
                required,
                numeric
            },
            password: {
                required
            }
        }
    },
    methods: {
        screenChange: function() {
            document.getElementById("my-form").style.height =
                window.innerHeight + "px"
        },
        isPc: function() {
            var userAgentInfo = navigator.userAgent
            var Agents = [
                "Android",
                "iPhone",
                "SymbianOS",
                "Windows Phone",
                "iPad",
                "iPod"
            ]
            var flag = true
            for (var v = 0; v < Agents.length; v++) {
                if (userAgentInfo.indexOf(Agents[v]) > 0) {
                    flag = false
                    break
                }
            }
            this.flag = flag
        },
		showMsgFromChild:function(data){
            this.dataFromChild = data
		},
        PostAndLog: function() {
            if (this.flag){
                if (this.$v.form.$invalid) {
                    this.$v.$touch()
                    this.slidebar()
                }
                else if (!this.dataFromChild) {
                    alert("您必须通过验证")
                }
                else {
                    // push the form
                    alert("虽然没有后端验证，不过您现在可以访问了")
                    this.goto()
                }
			}
            else {
				alert("暂不支持移动端验证，直接进行路由跳转")
                this.goto()
			}
        },
        goto: function() {
            this.$router.push({ path: "/CandidateVerify" })
        },
		slidebar:function () {
			this.slide = true
        },

    },
    computed: {
        formStyle: () => {
            let screenHeight = document.body.clientHeight
            return {
                height: screenHeight + "px"
            }
        }
    },
    // when the second loop , this is the first page we see
    created: function() {
        this.t = setInterval(this.screenChange, 2000)
		this.isPc()
    },
    beforeDestroy: function() {
        clearInterval(this.t)
    }
}
</script>

<style scoped>
	.error {
		height: 20px;
		position: absolute;
		bottom: -22px;
	}
	.error2 {
		height: 20px;
		position: absolute;
		bottom: -44px;
	}
	.md-card div{
		color: #8b4513;
	}
</style>
