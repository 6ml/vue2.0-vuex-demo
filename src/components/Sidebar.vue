<template>
	<el-card class="box-card sidebar">
		<div slot="header" class="text-center sidebar-header">已有时长</div>
		<div class="text item text-center">{{ time }} 小时</div>
	</el-card>
</template>

<!-- <template>
	<div class="panel panel-default">
		<div class="panel-heading">
			<h1 class="text-center">已有时长</h1>
		</div>
		<div class="panel-body">
			<h1 class="text-center">{{ time }} 小时</h1>
		</div>
	</div>
</template> -->

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
