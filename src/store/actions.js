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
			.then( () => {
				dispatch('getPlans');
				dispatch('getTotalTime');
			});
	},
	deletePlan({ commit }, idx) {
		commit(types.DELETE_PLAN, idx)
		axios.post('/api/deletePlan',{"id":"12321"}).then(result => {
			console.log(result)
		}).catch(err => {
			console.error(err);
		})
	},
	getPlans({ commit }) {
		axios.get('/api/getPlans').then(result => {
			console.log(result.data);
			commit(types.GET_PLAN, result.data);
		});
	},
	getTotalTime({ commit }) {
		axios.get('/api/getTotalTime').then(result => {
			console.log(result)
			commit(types.GET_TOTALTIME, result.data)
		})
	}
}