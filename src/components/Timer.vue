<template>
	<div style="position: relative">
		<span style="padding-right: 10px">{{totalTimeStr}}</span>
		<span style="position: absolute">/ 00:00:00</span>
	</div>

</template>

<script>
	var msToTimeStr = function(time) {
		var minute = Math.floor(time / (60 * 1000));
		var second = Math.floor((time - 60000 * minute) / 1000);
		var milSecond = Math.floor(time % 1000 /10);
		return (
			(minute < 10 ? "0" + minute : minute) +
			":" +
			(second < 10 ? "0" + second : second) +
			"." +
			(milSecond < 10 ? "0" + milSecond : milSecond)
		);
	};
	export default {
		name: "Timer",
		data() {
			return {
				watchOn: false,
				totalSaved: 0,
				latestStart: null,
				interval: null,
				initialTime: null,
				lastRecordTime: null,
				latestTotalMss: 0,
				totalMss: 0,
				records: []
			};
		},
		computed: {
			totalTimeStr() {
				var str = msToTimeStr(this.totalMss);
				return str;
			}
		},
		methods: {
			resetBtnClicked() {
				this.reset()
			},
			startBtnClicked() {
				this.watchOn = !this.watchOn;
				if (this.watchOn) {
					this.start();
				} else {
					this.stop();
				}
			},
			reset() {
				this.watchOn = false,
				this.totalSaved = 0,
				this.latestStart = null,
				this.interval = null,
				this.initialTime = null,
				this.lastRecordTime = null,
				this.latestTotalMss = 0,
				this.totalMss = 0,
				this.records = []
			},
			start() {
				var tempTime = new Date().getTime();
				if (this.initialTime != null) this.initialTime = tempTime;
				this.latestStart = tempTime;
				this.totalSaved = this.totalMss;
				var totalLatestSaved = this.latestTotalMss;
				this.interval = setInterval(() => {
					var current = new Date().getTime();
					this.totalMss = this.totalSaved + current - this.latestStart;
					if (this.lastRecordTime == null) {
						this.latestTotalMss = this.totalMss;
					} else {
						if (this.lastRecordTime >= this.latestStart) {
							this.latestTotalMss = current - this.lastRecordTime;
						} else {
							this.latestTotalMss = totalLatestSaved + current - this.latestStart;
						}
					}
				}, 10);
			},
			stop() {
				clearInterval(this.interval);
			}
		}
	};
</script>

<style scoped>

</style>