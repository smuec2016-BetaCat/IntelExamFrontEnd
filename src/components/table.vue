<template>
	<div class="md-layout md-gutter">
		<div class="md-layout-item md-size-25">
			<h3>
				<slot name="key"></slot>
			</h3>
		</div>
		<div class="md-layout-item">
			<h3>
				<slot name="value"></slot>
			</h3>
		</div>
	</div>
</template>

<script>
export default {
    name: "table"
}
</script>

<style scoped>
h3 {
    display: inline-block;
    margin: 10px 0;
}
</style>
