<template>
	<div class="grid grid-cols-4 gap-8 px-8">
		<div
			class="w-full rounded-xl p-5 text-white border-2 border-white bg-blue-500 ease-in duration-300 hover:bg-violet-500"
			v-for="user in users"
			:key="user.id"
		>
			<CardLayout>
				<h4 class="text-lg font-semibold">
					<span class="text-base">Name: </span>{{ user.name }}
				</h4>
			</CardLayout>

			<CardLayout
				class="p-6 tracking-wide text-md ease-in duration-300 hover:text-lg"
			>
				<h6>Username: {{ user.username }}</h6>
				<p>{{ user.address.street }}</p>
				<p>{{ user.address.suite }}</p>
				<p>{{ user.address.city }}</p>
				<p>{{ user.address.zipcode }}</p>
				<p>{{ user.phone }}</p>
			</CardLayout>
		</div>
	</div>
</template>

<script lang="ts" setup>
	import CardLayout from '../layouts/CardLayout.vue';

	const props = defineProps(['data']);
	const users = props.data;
	console.log(users);
</script>

<style scoped></style>
