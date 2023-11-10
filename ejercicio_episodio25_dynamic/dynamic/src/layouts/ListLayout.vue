<template>
	<div class="container">
		<ul>
			<UserList v-for="(user, index) in props.data" :key="index" :data="user" />
		</ul>
	</div>
</template>

<script lang="ts" setup>
	import { defineProps } from 'vue';
	import UserList from '@/components/UserList.vue';
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
	ul {
		border: rgb(82, 82, 82) 2px solid;
		border-radius: 12px;
		padding: 20px;
		margin-top: 30px;
		list-style-position: inside;
	}
</style>
