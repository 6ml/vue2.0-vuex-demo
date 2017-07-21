import * as types from './mutation-types'
import axios from 'axios'

export default {
	addTotalTime({ commit }, time) {
		commit(types.ADD_TOTAL_TIME, time)
	},
	decTotalTime({ commit }, time) {
		commit(types.DEC_TOTAL_TIME, time)
	},
	savePlan({ commit, dispatch }, plan){
		axios.post('/api/addPlan', plan)
			.then( (result) => {
				let data = result.data;
				if(typeof data === "object"){
					commit(types.SAVE_PLAN, data);
					dispatch('addTotalTime', data.totalTime);
				}
				else{
					alert('添加失败');
				}
			}).catch(() => {
				alert('添加失败');
			});
	},
	deletePlan({ commit, dispatch }, deleteObj) {
		let plan = deleteObj.plan;
		let idx = deleteObj.index;
		axios.post('/api/deletePlan',{id: plan._id}).then(() => {
			commit(types.DELETE_PLAN, idx);
			dispatch('decTotalTime', plan.totalTime);
		}).catch( () => {
			alert('删除失败');
		})
	},
	getPlans({ commit }) {
		axios.get('/api/getPlans').then(result => {
			commit(types.GET_PLAN, result.data);
		});
	},
	getTotalTime({ commit }) {
		axios.get('/api/getTotalTime').then(result => {
			commit(types.GET_TOTALTIME, result.data)
		})
	}
}