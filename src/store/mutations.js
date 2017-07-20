import * as types from './mutation-types'

export default {
	// 增加总时间
	[types.ADD_TOTAL_TIME] (state, time) {
		state.totalTime = state.totalTime + parseInt(time)
	},
	// 减少总时间
	[types.DEC_TOTAL_TIME] (state, time) {
		state.totalTime = state.totalTime - parseInt(time)
	},
	// 新增计划
	[types.SAVE_PLAN] (state, plan) {
		// 设置默认值，未来我们可以做登入直接读取昵称和头像
		const avatar = 'https://sfault-avatar.b0.upaiyun.com/147/223/147223148-573297d0913c5_huge256'

		state.list.push(
			Object.assign({ username: 'luapth', avatar: avatar}, plan)
		)
	},
	// 删除计划
	[types.DELETE_PLAN] (state, idx) {
		state.list.splice(idx, 1)
	},
	// 获取 plan 数据
	[types.GET_PLAN] (state, result) {
		result.forEach((item) => {
			item.date = item.date.slice(0,10)
		})
		state.list = result
	},
	// 获取 totalTime
	[types.GET_TOTALTIME] (state, result) {
		state.totalTime = parseInt(result.totalTime)
	}
}