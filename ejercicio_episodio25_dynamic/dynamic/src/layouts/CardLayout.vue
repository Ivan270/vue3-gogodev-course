<template>
	<div class="container">
		<UserCard v-for="(user, index) in props.data" :key="index" :data="user" />
	</div>
</template>

<script lang="ts" setup>
	import { defineProps } from 'vue';
	import UserCard from '../components/UserCard.vue';

	const props = defineProps(['data']);
</script>

<style scoped>
	.container {
		width: 100vw;
		display: flex;
		justify-content: center;
		align-items: flex-start;
		flex-wrap: wrap;
	}
</style>
