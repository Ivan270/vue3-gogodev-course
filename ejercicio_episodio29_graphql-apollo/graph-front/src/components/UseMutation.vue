<template>
	<button @click="sendMessage">Crear comentario</button>
</template>

<script lang="ts" setup>
	import gql from 'graphql-tag';
	import { useMutation } from '@vue/apollo-composable';

	// Es posible darle nombre a las mutaciones, en este caso 'createComment'
	const {
		mutate: createComment,
		loading: createCommentLoading,
		error: createCommentError,
		onDone,
		onError,
	} = useMutation(
		gql`
			mutation ($name: String!, $text: String!) {
				createComment(name: $name, text: $text)
			}
		`,
		() => ({
			variables: {
				name: 'Don Potrí',
				text: 'Texto traído elegantemente desde la mutación',
			},
			// define cual será el comportamiento cuando se creen/modifiquen datos
			// update: (cache, { data: { createComment } }) => {
			// 	let data = cache.readQuery({ query: getAllComments });
			// 	data = {
			// 		...data,
			// 		comments: [...data.comments, createComment],
			// 	};
			// 	cache.writeQuery({ query: getAllComments, data });
			// },
		})
	);
	onDone((done) => {
		console.log(done.value);
	});
	onError((error) => {
		console.error(error.message);
	});
	// se llama a función de la mutación creada entregando en un objeto las variables requeridas
	const sendMessage = () => {
		createComment();
	};
</script>
