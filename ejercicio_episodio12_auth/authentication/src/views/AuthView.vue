<template>
	<div class="container">
		<form>
			<div class="mb-3">
				<label for="exampleInputEmail1" class="form-label">Username</label>
				<input
					name="username"
					v-model="username"
					type="email"
					class="form-control"
					aria-describedby="emailHelp"
					id="exampleInputEmail1"
				/>
			</div>
			<div class="mb-3">
				<label for="exampleInputPassword1" class="form-label">Password</label>
				<input
					v-model="password"
					name="password"
					type="password"
					class="form-control"
					id="exampleInputPassword1"
				/>
			</div>
			<button
				type="submit"
				class="btn btn-primary mt-2"
				@click.prevent="authUser"
			>
				Submit
			</button>
		</form>
	</div>
</template>

<script lang="ts" setup>
	import { Ref, ref } from 'vue';
	import AuthService from '@/services/AuthService';
	import { useCookies } from 'vue3-cookies';
	import { useStorage } from 'vue3-storage';

	const { cookies } = useCookies();
	const storage = useStorage();

	let username: Ref<string> = ref('');
	let password: Ref<string> = ref('');

	const authUser = async () => {
		const auth = new AuthService();
		const success = await auth.login(username.value, password.value);
		// console.log(success);
		if (success) {
			alert('Exito!');
			// console.log(auth.getJwt().value);
			console.log(cookies.get('auth'));
			console.log(await storage.getStorageSync('testValue1'));
			sessionStorage.setItem('test2', 'value2');
		} else {
			alert('Login incorrecto :( )');
		}
	};
</script>

<style scoped></style>
