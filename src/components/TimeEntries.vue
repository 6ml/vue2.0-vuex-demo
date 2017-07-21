<template>
	<div>
		<router-link v-if="$route.path !== '/time-entries/log-time'" to="/time-entries/log-time">
			<el-button type="primary">创建</el-button>
		</router-link>

		<div v-if="$route.path === '/time-entries/log-time'">
			<h3>创建</h3>
		</div>
		
		<hr>

		<div class="time-extries">
			<p v-if="!plans.length"><strong>还没有任何计划</strong></p>

			<el-card class="box-card">
				<div class="item" v-for="(plan, index) in plans" :key="index">
					<el-row>
						<el-col :span="4">
							<img :src="plan.avatar" class="plan-avatar">
							<p class="text-center"><strong>
								{{ plan.username }}
							</strong></p>
						</el-col>
						<el-col :span="4">
							<h3 class="plan-totalTime">
								<i class="el-icon-time"></i>
								{{ plan.totalTime }}
							</h3>
							<p class="plan-date">
								<i class="el-icon-date"></i>
								{{ plan.date }}
							</p>
						</el-col>
						<el-col :span="14">
							<p class="plan-comment">
								{{ plan.comment }}
							</p>
						</el-col>
						<el-col :span="2">
							<el-button type="danger" icon="close" @click="deletePlan(index)"></el-button>
						</el-col>
					</el-row>
				</div>
			</el-card>
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
  .plan-avatar{
  	display: block;
  	width: 60%;
  	height: 80%;
  	border-radius: 50%;
  	margin: 0 auto 10px;
  }

  .text-center{
  	text-align: center;
  }
</style>
