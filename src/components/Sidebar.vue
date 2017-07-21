<template>
	<el-card class="box-card">
		<div slot="header">已有时长</div>
		<div class="text item">{{ time }} 小时</div>
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
