<template>
	<div>test</div>
</template>

<script>
	import axios from 'axios'
export default {
	name: "test",
	methods:{
		test(){
			axios.get('http://47.101.196.53')
				.then(response=>{
					console.log(response.status)
				})
				.catch(error=>{
					console.log(error)
				})
		}
	},
	created: function() {
		this.t = setInterval(this.test, 50)
	},
	beforeDestroy: function() {
		clearInterval(this.t)
	}
}
</script>

<style scoped>

</style>