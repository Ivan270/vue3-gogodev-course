import { createApp, provide, h } from 'vue';
import App from './App.vue';
import {
	ApolloClient,
	createHttpLink,
	InMemoryCache,
	split,
} from '@apollo/client/core';
import { DefaultApolloClient } from '@vue/apollo-composable';
import { getMainDefinition } from '@apollo/client/utilities';
import { GraphQLWsLink } from '@apollo/client/link/subscriptions';
import { createClient } from 'graphql-ws';

const httpLink = createHttpLink({
	uri: 'http://localhost:4000/graphql',
});

const wsLink = new GraphQLWsLink(
	// uri: `ws://localhost:4000/graphql`,
	// options: {
	// 	// para que en caso de caída, el sistema intente reconectarse
	// 	reconnect: true,
	// },
	createClient({
		url: 'ws://localhost:4000/graphql',
	})
);

const link = split(
	({ query }) => {
		const definition = getMainDefinition(query);
		// en función del tipo de query retornará wslink o httplink
		return (
			definition.kind === 'OperationDefinition' &&
			definition.operation === 'subscription'
		);
	},
	wsLink,
	httpLink
);

const cache = new InMemoryCache();

const apolloClient = new ApolloClient({
	link: link,
	cache,
});

createApp({
	setup() {
		provide(DefaultApolloClient, apolloClient);
	},
	render: () => h(App),
}).mount('#app');
