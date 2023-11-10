import { defineStore } from 'pinia';

const myHeaders = {
	'Content-Type': 'Application/json',
	Accept: 'Application/json',
};
const useAuth = defineStore('auth', {
	state: () => {
		return {
			token: null,
			baseUrl: 'http://127.0.0.1:8000/api',
		};
	},
	actions: {
		async register(name: string, email: string, password: string) {
			const uri = `${this.baseUrl}/auth/register`;
			const rawResponse = await fetch(uri, {
				method: 'POST',
				headers: myHeaders,
				body: JSON.stringify({
					name,
					email,
					password,
				}),
			});
			const response = await rawResponse.json();
			if (!response.status) {
				return false;
			} else {
				this.token = response.token;
				return true;
			}
		},
		async login(email: string, password: string) {
			const uri = `${this.baseUrl}/auth/login`;
			const rawResponse = await fetch(uri, {
				method: 'POST',
				headers: myHeaders,
				body: JSON.stringify({
					email,
					password,
				}),
			});
			const response = await rawResponse.json();

			if (!response.status) {
				return false;
			} else {
				this.token = response.token;
				return true;
			}
		},
		logout() {
			return (this.token = null);
		},
		async getNotes() {
			const uri = `${this.baseUrl}/note`;
			const rawResponse = await fetch(uri, {
				method: 'GET',
				headers: {
					'Content-Type': 'Application/json',
					Accept: 'Application/json',
					Authorization: `Bearer ${this.token}`,
				},
			});
			const response = await rawResponse.json();
			console.log(response);
			return response;
		},
		async createNote(content: string) {
			const uri = `${this.baseUrl}/note`;
			const rawResponse = await fetch(uri, {
				method: 'POST',
				headers: {
					'Content-Type': 'Application/json',
					Accept: 'Application/json',
					Authorization: `Bearer ${this.token}`,
				},
				body: JSON.stringify({ content }),
			});
			const response = await rawResponse.json();
			return response;
		},
	},
});
export default useAuth;
