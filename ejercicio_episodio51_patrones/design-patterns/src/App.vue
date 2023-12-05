<script setup lang="ts">
	import { ref, Ref, onMounted, provide } from 'vue';
	import LoaderHelper from './components/LoaderHelper.vue';
	import ExampleComponent from './components/ExampleComponent.vue';
	import ListRender from './components/ListRender.vue';
	import UserInterface from './interfaces/UserInterface';
	import ItemService from './services/ItemService';
	import FirstChild from './components/FirstChild.vue';

	const someApi = 'https://jsonplaceholder.typicode.com/users';
	// Container/Visualizer

	const dataToRender: Ref<Array<UserInterface>> = ref([]);
	const service = new ItemService();

	const getData = async () => {
		dataToRender.value = await service.getItems();
	};

	onMounted(() => {
		getData();
	});

	// Provide/Inject
	const msg = ref('Hi from the father');

	const updateMsg = () => {
		msg.value = 'Msg updated';
	};
	// Provide msg to any child or further -> provide('name', value)
	provide('msg', msg);
</script>

<template>
	<div class="min-h-screen bg-zinc-900 py-20">
		<div class="container mx-auto">
			<div class="p-10 text-center">
				<h1 class="text-3xl text-slate-200 font-bold underline">
					Hello world!
				</h1>
			</div>
			<LoaderHelper :url="someApi" :component-to-show="ExampleComponent" />
		</div>
		<hr class="w-1/2 my-12 mx-auto" />
		<div class="container mx-auto">
			<h3 class="text-slate-200 text-2xl font-semibold text-center">
				Contenedor/Visualizador
			</h3>
			<ul v-for="user in dataToRender" :key="user.id">
				<ListRender :data="user" color="#ff5543" />
			</ul>
		</div>
		<hr class="w-1/2 my-12 mx-auto" />
		<!-- Provide/Inject -->
		<div class="container mx-auto text-center text-slate-200">
			<h3 class="text-slate-200 text-2xl font-semibold mb-10">
				Provide/Inject
			</h3>
			<h1 class="text-slate-200 font-bold text-2xl">I am the father</h1>
			<button
				class="inline-flex items-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
				@click="updateMsg"
			>
				Update the message
			</button>
			<FirstChild />
		</div>
	</div>
</template>

<style scoped></style>
