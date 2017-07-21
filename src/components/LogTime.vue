<template>
	<div class="form-horizontal">
		<div class="form-group">
			<div class="col-sm-4">
				<label>昵称</label>
				<input type="text" class="form-control" v-model="username" placeholder="UserName">
			</div>
			<div class="col-sm-4">
				<label>日期</label>
				<input type="date" class="form-control" v-model="date" placeholder="Date">
			</div>
			<div class="col-sm-4">
				<label>时间</label>
				<input type="number" class="form-control" v-model="totalTime" placeholder="Hours">
			</div>
		</div>
		<div class="form-group">
			<div class="col-sm-12">
				<label>备注</label>
				<input type="text" class="form-control" v-model="comment" placeholder="Comment">
			</div>
		</div>
		<div class="form-group">
			<div class="col-sm-12">
				<label>头像</label>
				<input type="file" class="file" accept="image/png,image/gif,image/jpeg" @change="update">
			</div>
		</div>
		<button class="btn btn-primary" @click="save()">保存</button>
		<router-link to="/time-entries" class="btn btn-danger">取消</router-link>
	</div>
</template>

<script>
	export default {
		name: "LogTime",
		data () {
			return {
				username: '',
				date: '',
				totalTime: '',
				comment: '',
				plan: {}
			}
		},
		methods: {
			save () {
				if(!this.plan.avatar){
					alert('请先选择头像!');
				}
				else{
					this.plan.username = this.username;
					this.plan.date = this.date;
					this.plan.totalTime = this.totalTime;
					this.plan.comment = this.comment;

					this.$store.dispatch('savePlan', this.plan)
					
					this.$router.go(-1)
				}
			},
			update (e) {
				let file = e.target.files[0];
				this.plan.avatar = file;
			}
		}
	}
</script>
