<template>
	<h1>Notifications</h1>
	<ul>
		<li v-for="(notification, index) of comments" :key="index">
			{{ notification.name }} - {{ notification.text }}
		</li>
	</ul>
</template>

<script lang="ts" setup>
	import { watch, Ref, ref } from 'vue';
	import { useSubscription } from '@vue/apollo-composable';
	import gql from 'graphql-tag';

	const comments = ref([]);

	const { result, loading, error } = useSubscription(gql`
		subscription {
			commentCreated {
				name
				text
			}
		}
	`);

	watch(result, (data) => {
		comments.value.push(data.commentCreated);
	});
</script>

<style scoped></style>
