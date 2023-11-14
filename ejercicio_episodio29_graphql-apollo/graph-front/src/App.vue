<template>
	<h1>Comments</h1>
	<div v-if="loading">
		<h3>Cargando comentarios</h3>
	</div>
	<div v-else>
		<ul>
			<li v-for="(comment, index) in result.getAllComments" :key="index">
				<b>{{ comment.name }}</b> - {{ comment.text }}
			</li>
		</ul>
	</div>
	<div class="error" v-if="error">
		<h3>Error en la petición</h3>
	</div>
	<hr />
	<input type="text" v-model="userId" />
	<!-- <button @click="conVariables.refetch">Refresh</button> -->
	<hr />
	<UseMutation />
	<hr />
	<SubscriptionExample />
</template>

<script lang="ts" setup>
	import { useLazyQuery, useQuery } from '@vue/apollo-composable';
	import gql from 'graphql-tag';
	import { Ref, ref } from 'vue';
	import UseMutation from '@/components/UseMutation.vue';
	import SubscriptionExample from '@/components/SubscriptionExample.vue';

	const userId: Ref<string> = ref('User 1');

	/* En result quedará almacenado el resultado de la consulta, en loading monitoriza el estado de la consulta (si finaliza o no) y en error los potenciales errores que pudieran ocurrir durante la petición */
	const { result, loading, error, refetch, onError, onResult } = useQuery(gql`
		query {
			getAllComments {
				name
				text
			}
		}
	`);

	// Segundo argumento con función anónima, es recomendable.
	// Se puede buscar la constante y sus valores en Vue devtools
	// Tercer argumento son opciones de consulta
	const conVariables = useLazyQuery(
		gql`
			query ($name: String!) {
				getCommentsFromUser(name: $name) {
					name
					text
				}
			}
		`,
		() => ({
			name: userId.value,
		}),
		{
			// fetchPolicy: 'cache-first', // si datos no estan cacheados, consulta al servidor de apollo. Opción que necesita menos carga
			//fetchPolicy: 'cache-only', // solo devuelve datos en cache, si no hay fallará. Cacheará datos
			//fetchPolicy: 'no-cache', // nunca cacheará datos
			fetchPolicy: 'cache-and-network', // retorna resultado del cache first si existe y después comprueba a la red para ver si hay nuevo contenido disponible
			pollInterval: 1000, // cada cuanto comprobará si datos cambiaron en el servicio.
			// refetchWritePolicy
		}
	);

	// Para realizar una acción al obtener resultado se utiliza este hook
	conVariables.onResult((queryResult) => {
		console.log(queryResult.data);
		console.log(queryResult.loading);
		console.log(queryResult.networkStatus);
	});
	conVariables.onError((error) => {
		console.error(error.graphQLErrors);
	});
</script>

<style>
	.error {
		color: red;
	}
</style>
