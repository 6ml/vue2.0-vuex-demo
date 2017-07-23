<template>
	<el-card class="box-card sidebar">
		<div slot="header" class="text-center sidebar-header">已有时长</div>
		<div class="text item text-center">{{ time }} 小时</div>
	</el-card>
</template>

<script>
	export default {
		computed: {
			time () {
				return this.$store.state.totalTime
			}
		}
	}
</script>

<style lang="scss">
	.sidebar {

		.el-card__header {
			font-weight: bold;
			font-size: 1.2em;
			background-color: #f5f5f5;
		}
	}
</style>
