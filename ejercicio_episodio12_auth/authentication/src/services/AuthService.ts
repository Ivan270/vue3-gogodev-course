import { ref, Ref } from 'vue';
import { useCookies } from 'vue3-cookies';
import { useStorage } from 'vue3-storage';

const { cookies } = useCookies();
const storage = useStorage();

class AuthService {
	private jwt: Ref<string>;
	private error: Ref<string>;

	constructor() {
		this.jwt = ref('');
		this.error = ref('');
	}

	getJwt(): Ref<string> {
		return this.jwt;
	}
	getError(): Ref<string> {
		return this.error;
	}
	// Usando api para AUTH: https://dummyjson.com/docs/auth
	async login(username: string, password: string): Promise<boolean> {
		try {
			const url = 'https://dummyjson.com/auth/login';
			const myHeaders = new Headers();
			myHeaders.append('Content-Type', 'application/json');

			const res = await fetch(url, {
				method: 'POST',
				headers: myHeaders,
				body: JSON.stringify({
					username,
					password,
				}),
			});

			const response = await res.json();

			// maneja respuesta recibida desde el servidor
			if (response.message === 'Invalid credentials') {
				this.error.value = response.message;
				return false;
			} else {
				this.jwt.value = response.token;
				// $cookies.set('auth', response.token);
				cookies.set('auth', response.token);
				storage.setStorage({ key: 'testValue1', data: 'testData1' });
				return true;
			}
		} catch (error) {
			this.error.value = 'login failed';
			return false;
		}
	}
}
export default AuthService;
