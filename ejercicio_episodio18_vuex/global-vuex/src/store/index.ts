import { createStore } from 'vuex';

export default createStore({
	state: {
		counter: 1,
	},
	getters: {
		doubleCounter(state) {
			return state.counter * 2;
		},
	},
	mutations: {
		setCounter(state, value) {
			state.counter = value;
		},
	},
	actions: {
		// async setter
	},
	modules: {
		// subdivide the store
	},
});
