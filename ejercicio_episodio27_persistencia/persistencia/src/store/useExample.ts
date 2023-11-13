import { defineStore } from 'pinia';

export const useExample = defineStore('useExample', {
	state: () => {
		return {
			count: 1,
		};
	},
	actions: {
		init() {
			const countInit = localStorage.getItem('count');
			if (countInit) {
				this.count = parseInt(countInit);
			}
		},
		increment(val = 1) {
			this.count += val;
			localStorage.setItem('count', this.count.toString());
		},
	},
	// persist: {
	// 	storage: sessionStorage,
	// 	paths: ['count'],
	// },
});
