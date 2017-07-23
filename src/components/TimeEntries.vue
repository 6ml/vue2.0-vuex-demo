<template>
	<div>
		<router-link v-if="$route.path !== '/time-entries/log-time'" to="/time-entries/log-time">
			<el-button type="primary">创建</el-button>
		</router-link>

		<div v-if="$route.path === '/time-entries/log-time'">
			<h3>创建</h3>
		</div>
		
		<div class="time-entries">
			<p v-if="!plans.length"><strong>还没有任何计划</strong></p>

			<el-card v-else class="plan-card">
				<div class="item" v-for="(plan, index) in plans" :key="index">
					<el-row>
						<el-col :span="4" class="user-info">
							<img :src="plan.avatar" class="plan-avatar">
							<p class="text-center"><strong>
								{{ plan.username }}
							</strong></p>
						</el-col>
						<el-col :span="4" class="time">
							<h3 class="plan-totalTime">
								<i class="el-icon-time"></i>&nbsp;
								{{ plan.totalTime }} hours
							</h3>
							<p class="plan-date">
								<i class="el-icon-date"></i>
								{{ plan.date }}
							</p>
						</el-col>
						<el-col :span="14" class="comment">
							<p class="plan-comment">
								<strong>备注: </strong>{{ plan.comment }}
							</p>
						</el-col>
						<el-col :span="2" class="oper">
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

<style lang="scss">
  .plan-avatar{
  	display: block;
  	width: 60%;
  	border-radius: 50%;
  	margin: 0 auto 10px;
  }

  .plan-card .el-card__body{
  	padding: 0;
  }

  .plan-card{
  	margin: 20px 0;

  	.item{
	  	border-bottom: 1px solid #dbdbdb;

	  	.user-info{
	  		border-right: 1px solid #dbdbdb;
	  		background-color: #f5f5f5;

	  		img{
	  			width: 75px;
	  			height: 75px;
	  			margin: 10px auto 0;
	  		}

	  		p {
	  			margin: 10px 0;
	  			font-size: 0.9em;
	  		}
	  	}

	  	.time {
			text-align: center;
			padding-top: 10px;

			.plan-date {
				margin: 0 10px;
				border-radius: 3px;
				background-color: #337ab7;
				color: #fff;
				padding: 3px 0;
				font-size: 0.8em;
			}
	  	}

	  	.comment {
	  		font-size: 0.9em;
	  		padding: 15px 10px;
	  	}

	  	.oper {
	  		position: relative;
	  		font-size: 0.8em;

	  		.el-button {
	  			padding: 3px;
	  			position: absolute;
	  			top: 0;
	  			right: 0;
	  		}
	  	}

	  	&:last-child {
	  		border: 0;
	  	}
	}
  }
</style>
