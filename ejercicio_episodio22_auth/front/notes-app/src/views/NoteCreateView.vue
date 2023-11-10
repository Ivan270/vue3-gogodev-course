<template>
	<div class="container">
		<form>
			<h1 class="display-6">Create a note</h1>

			<div class="mb-3">
				<label for="noteArea" class="form-label">Note</label>
				<textarea
					class="form-control"
					id="noteArea"
					rows="3"
					v-model="note"
				></textarea>
			</div>
			<button
				@click.prevent="sendNoteHandler"
				type="submit"
				class="btn btn-primary"
			>
				Submit
			</button>
		</form>
		<p
			:class="{
				danger: hasError,
				sending: !hasError,
			}"
		>
			{{ feedback }}
		</p>
	</div>
</template>

<script lang="ts" setup>
	import { ref, Ref } from 'vue';
	import useAuth from '@/store/auth';
	import router from '@/router';

	const feedback: Ref<string> = ref('');
	const hasError: Ref<boolean> = ref(false);
	const store = useAuth();

	const note: Ref<string> = ref('');

	const sendNoteHandler = async () => {
		const response = await store.createNote(note.value);
		if (!response) {
			feedback.value = 'Error creating note';
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
