<template>
	<h1>Listado de usuarios</h1>
	<input
		type="text"
		placeholder="Filtrar por nombre"
		v-model="search"
		@keyup="searchHandler"
	/>
	<div>
		<button @click="layoutHandler(ListLayout)">Ver en lista</button>
		<button @click="layoutHandler(CardLayout)">Ver en tarjetas</button>
		<button @click="layoutHandler(TableLayout)">Ver en tabla</button>
	</div>
	<!-- componente dinámico -->
	<!-- se bindea a 'is' qué componente se cargará -->
	<component :is="layout" :data="filteredUsers" />
</template>

<script lang="ts" setup>
	import { ref, Ref, defineAsyncComponent } from 'vue';
	// importación asíncrona para no ralentizar la carga del componente
	const ListLayout = defineAsyncComponent(
		() => import('@/layouts/ListLayout.vue')
	);
	const CardLayout = defineAsyncComponent(
		() => import('@/layouts/CardLayout.vue')
	);
	const TableLayout = defineAsyncComponent(
		() => import('@/layouts/TableLayout.vue')
	);
	const layout = ref(ListLayout);

	const layoutHandler = (component: any) => {
		layout.value = component;
	};

	const search: Ref<string> = ref('');
	// Filtro por nombre
	const searchHandler = () => {
		filteredUsers.value = users.value.filter((user) =>
			user.name.toLowerCase().includes(search.value.toLowerCase())
		);
	};

	const users = ref([
		{
			name: 'Juan',
			age: 40,
			position: 'frontend',
		},
		{
			name: 'Jose',
			age: 30,
			position: 'fullstack',
		},
		{
			name: 'Lucia',
			age: 25,
			position: 'frontend',
		},
		{
			name: 'Ana',
			age: 31,
			position: 'backend',
		},
		{
			name: 'Roberto',
			age: 43,
			position: 'backend',
		},
	]);
	const filteredUsers = ref([]);
	filteredUsers.value = users.value;
</script>
