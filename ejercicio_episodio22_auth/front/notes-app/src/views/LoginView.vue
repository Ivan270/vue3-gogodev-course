<template>
	<div class="container">
		<form>
			<h1 class="display-6">Login</h1>

			<div class="mb-3">
				<label for="exampleInputEmail1" class="form-label">Email address</label>
				<input
					type="email"
					class="form-control"
					id="exampleInputEmail1"
					aria-describedby="emailHelp"
					v-model="emailInput"
				/>
			</div>
			<div class="mb-3">
				<label for="exampleInputPassword1" class="form-label">Password</label>
				<input
					type="password"
					class="form-control"
					id="exampleInputPassword1"
					v-model="passwordInput"
				/>
			</div>
			<div id="emailHelp" class="form-text mb-3">
				Don't have an account?
				<RouterLink :to="{ name: 'register' }">Register</RouterLink>
			</div>

			<button
				@click.prevent="loginHandler"
				type="submit"
				class="btn btn-primary"
			>
				Log in
			</button>
			<div
				:class="{
					danger: hasError,
					sending: !hasError,
				}"
			>
				{{ feedBack }}
			</div>
		</form>
	</div>
</template>

<script lang="ts" setup>
	import { ref, Ref } from 'vue';
	import useAuth from '@/store/auth';
	import router from '@/router';

	const store = useAuth();

	const emailInput: Ref<string> = ref('');
	const passwordInput: Ref<string> = ref('');

	const feedBack: Ref<string> = ref('');
	const hasError: Ref<boolean> = ref(false);

	const loginHandler = async () => {
		hasError.value = false;
		feedBack.value = 'Logging in . . .';
		const response = await store.login(emailInput.value, passwordInput.value);
		if (!response) {
			hasError.value = true;
			feedBack.value = 'Error en el login.';
		} else {
			router.push({ name: 'noteList' });
		}
	};
</script>

<style scoped>
	.danger {
		color: red;
		background-color: salmon;
	}
	.sending {
		color: blue;
	}
</style>
