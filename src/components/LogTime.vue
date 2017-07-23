<template>
	<!-- <div class="form-horizontal">
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
	</div> -->
	<div class="createPlan">
		<el-form ref="form" :inline="true" label-width="50px">
			<el-form-item label="姓名">
				<el-input v-model="username" placeholder="username"></el-input>
			</el-form-item>
			<el-form-item label="日期">
				<el-date-picker type="date" v-model="date" placeholder="yyyy-mm-dd"></el-date-picker>
			</el-form-item>
			<el-form-item label="时长">
				<el-input type="number" v-model="totalTime" placeholder="totalTime"></el-input>
			</el-form-item>
		</el-form>
		<el-form ref="form" label-width="50px">
			<el-form-item label="备注" class="comment">
				<el-input v-model="comment" placeholder="comment"></el-input>
			</el-form-item>
			<el-form-item label="头像" class="avatar">
				<el-upload
					class="avatar-uploader"
					action="https://jsonplaceholder.typicode.com/posts/"
					:show-file-list="false"
					:on-success="handleAvatarSuccess"
					:before-upload="beforeAvatarUpload">
					<img v-if="avatar" :src="avatar" class="avatar">
					<i v-else class="el-icon-plus avatar-uploader-icon"></i>
					</el-upload>
			</el-form-item>
			<el-form-item label-width="80px">
				<el-button type="primary" @click="save()">立即创建</el-button>
				<el-button>取消</el-button>
			</el-form-item>
		</el-form>
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
				avatar: '',
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
			},
			handleAvatarSuccess(res, file) {
		        this.avatar = URL.createObjectURL(file.raw);
		    },
		    beforeAvatarUpload(file) {
		        const isJPG = file.type === 'image/jpeg';
		        const isLt2M = file.size / 1024 / 1024 < 2;

		        if (!isJPG) {
		            this.$message.error('上传头像图片只能是 JPG 格式!');
		        }
		        if (!isLt2M) {
		            this.$message.error('上传头像图片大小不能超过 2MB!');
		        }
		        return isJPG && isLt2M;
		    }
		}
	}
</script>

<style>
	.el-form-item.comment{
		width: 72%;
	}

	.avatar-uploader .el-upload {
		border: 1px dashed #d9d9d9;
		border-radius: 6px;
		cursor: pointer;
		position: relative;
		overflow: hidden;
	}
	.avatar-uploader .el-upload:hover {
		border-color: #20a0ff;
	}
	.avatar-uploader-icon {
		font-size: 28px;
		color: #8c939d;
		width: 150px;
		height: 150px;
		line-height: 150px;
		text-align: center;
	}
	.avatar {
		width: 150px;
		height: 150px;
		display: block;
	}
</style>
