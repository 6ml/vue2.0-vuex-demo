<template>
	<div>
		<router-link 
			v-if="$route.path !== '/time-entries/log-time'"
			to="/time-entries/log-time"
			class="btn btn-primary">
			创建
		</router-link>

		<div v-if="$route.path === '/time-entries/log-time'">
			<h3>创建</h3>
		</div>

		<hr>

		<div class="time-extries">
			<p v-if="!plans.length"><strong>还没有任何计划</strong></p>

			<div class="list-group">
				<div class="list-group-item" v-for="(plan,index) in plans">
					<div class="row">
						<div class="col-sm-2 user-details">
							<img :src="plan.avatar" class="avatar img-circle img-responsive">
							<p class="text-center">
								<strong>
									{{plan.username}}
								</strong>
							</p>
						</div>

						<div class="col-sm-2 text-center time-block">
							<h3 class="list-group-item-text total-time">
								<i class="glyphicon glyphicon-time"></i>
								{{plan.totalTime}}
							</h3>
							<p class="label label-primary text-center">
								<i class="glyphicon glyphicon-calendar"></i>
								{{plan.date}}
							</p>
						</div>

						<div class="col-sm-7 comment-section">
							<p class="comment">{{plan.comment}}</p>
						</div>

						<div class="col-sm-1"><button class="btn btn-xs btn-danger delete-button" @click="deletePlan(index)">x</button>
						</div>

					</div>
				</div>
			</div>
		</div>

		<router-view></router-view>
	</div>
</template>

<script>
	export default {
		name: "TimeEntries",
		computed: {
			plans () {
				// 从 store 中读取数据
				return this.$store.state.list
			}
		},
		methods: {
			deletePlan (idx) {
				// 将参数传入一个对象，dispatch 只能接受一个参数
				let deleteObj = {
					plan: this.plans[idx],
					index: idx
				}
				// 删除该计划
				this.$store.dispatch('deletePlan', deleteObj)
			}
		}
	}
</script>

<style>
  .avatar {
    height: 75px;
    margin: 0 auto;
    margin-top: 10px;
    margin-bottom: 10px;
  }
  .user-details {
    background-color: #f5f5f5;
    border-right: 1px solid #ddd;
    margin: -10px 0;
  }
  .time-block {
    padding: 10px;
  }
  .comment-section {
    padding: 20px;
  }
</style>
