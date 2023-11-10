<template>
	<div class="container">
		<form>
			<div class="mb-3">
				<label for="exampleInputEmail1" class="form-label">Email</label>
				<input
					name="email"
					v-model="email"
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
	import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';

	let email: Ref<string> = ref('');
	let password: Ref<string> = ref('');

	const authUser = () => {
		const auth = getAuth();
		signInWithEmailAndPassword(auth, email.value, password.value)
			.then((userCredential) => {
				const user = userCredential.user;
				console.log(user);
				// console.log(user);
				// console.log(user.accessToken);
				alert(`Usuario ${user.email} validado, con ID: ${user.uid}`);
			})
			.catch((error) => {
				const errorCode = error.code;
				const errorMessage = error.message;
				alert(errorMessage);
			});
	};
</script>

<style scoped></style>
