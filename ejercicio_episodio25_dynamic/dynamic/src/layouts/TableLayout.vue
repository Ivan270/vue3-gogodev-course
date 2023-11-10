<template>
	<div class="container">
		<table>
			<tr>
				<th>Nombre</th>
				<th>Edad</th>
				<th>Puesto</th>
			</tr>

			<UserRow v-for="(user, index) in props.data" :key="index" :data="user" />
		</table>
	</div>
</template>

<script lang="ts" setup>
	import { defineProps } from 'vue';
	import UserRow from '@/components/UserRow.vue';
	const props = defineProps(['data']);
</script>

<style scoped>
	.container {
		width: 100vw;
		display: flex;
		justify-content: center;
		align-items: flex-start;
		flex-wrap: wrap;
		margin-top: 30px;
	}
	table {
		text-align: start;
		border-collapse: collapse;
		width: 400px;
	}
	th {
		border: 2px solid #dddddd;
		padding: 8px;
	}
</style>
