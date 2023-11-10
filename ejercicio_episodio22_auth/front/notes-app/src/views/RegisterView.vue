<template>
	<div class="container">
		<form>
			<h1 class="display-6">Register</h1>
			<div class="mb-3">
				<label for="exampleInputName" class="form-label">Name</label>
				<input
					type="text"
					class="form-control"
					id="exampleInputName"
					v-model="nameInput"
				/>
			</div>
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
				Already have an account?
				<RouterLink :to="{ name: 'login' }">Login</RouterLink>
			</div>

			<button
				@click.prevent="registerUserHandler"
				type="submit"
				class="btn btn-primary"
			>
				Register
			</button>
			<p
				:class="{
					danger: hasError,
					sending: !hasError,
				}"
			>
				{{ feedBack }}
			</p>
		</form>
	</div>
</template>

<script lang="ts" setup>
	import { ref, Ref } from 'vue';
	import useAuth from '@/store/auth';
	import router from '@/router';

	const store = useAuth();

	const nameInput: Ref<string> = ref('');
	const emailInput: Ref<string> = ref('');
	const passwordInput: Ref<string> = ref('');
	const feedBack: Ref<string> = ref('');
	const hasError: Ref<boolean> = ref(false);

	const registerUserHandler = async () => {
		hasError.value = false;
		feedBack.value = 'Sending . . .';
		const response = await store.register(
			nameInput.value,
			emailInput.value,
			passwordInput.value
		);
		if (response) {
			router.push({ name: 'noteList' });
		} else {
			hasError.value = true;
			feedBack.value = 'Error en el registro.';
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
