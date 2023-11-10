<template>
	<div class="post">
		<h3>{{ props.title }}</h3>
		<p>
			{{ props.content }}
		</p>
		<input type="text" v-model="message" />
		<button @click="saluteButtonHandler">Di Hola</button>
	</div>
</template>

<script lang="ts" setup>
	import { defineProps, defineEmits, Ref, ref } from 'vue';

	interface Props {
		title: string;
		content?: string;
	}
	let message: Ref<string> = ref('');

	// ===PROPS===
	const props: Props = defineProps<Props>();
	// forma alternativa de llamar props
	// const props2 = defineProps({ title: String, content: String });
	// ===EMITS===
	const emit = defineEmits(['sayHi']);

	const saluteButtonHandler = () => {
		emit('sayHi', message.value);
	};
</script>

<style scoped>
	.post {
		width: 300px;
		min-height: 100px;
		border-radius: 10px;
		background-color: antiquewhite;
		margin: 10px;
		padding: 10px;
	}
</style>
