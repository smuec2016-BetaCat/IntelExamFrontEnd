<template>
	<div>
		<div class="my_container">
			<md-card>
				<div class="md-layout md-gutter md-alignment-top-center my_container">
					<div class="md-layout-item md-size-5"></div>
					<div class="md-layout-item md-elevation-5 md-size-25">
						<md-card-media>
							<img src="../assets/person.png" alt="People">
						</md-card-media>
					</div>
					<div class="md-layout-item md-size-10"></div>
					<div class="md-layout-item  md-size-60 mustleft">
						<h1>the message of the candidate</h1>
						<h2>sex: not male ; not female</h2>
						<h2>the item of test :ai wo jiu gen wo zou </h2>
						<h2>more detaismore detaismore detaismore detaismore </h2>
						<h2>more detais</h2>
						<h2>more detais</h2>
						<h2>more detais</h2>
					</div>
				</div>
				<md-card-actions>
					<md-button class="md-accent" v-on:click=messagewarn>Something wrong</md-button>
					<md-button v-on:click="goto">Go to Next Step</md-button>
				</md-card-actions>
			</md-card>
		</div>

	</div>
</template>

<script>
export default {
    name: "ComponentsCandidate",
    methods: {
        goto: function() {
            this.$router.push({ path: "/Dashboard" })
        },
        messagewarn: function() {
            alert("Something is wrong with the information of this Candidate!")
        }
    }
}
</script>

<style scoped>
.my_container {
    padding: 3% 5%;
}
.mustleft {
    text-align: left;
}
</style>
