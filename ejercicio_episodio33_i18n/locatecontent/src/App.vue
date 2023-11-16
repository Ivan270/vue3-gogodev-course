<template>
	<div>
		<select v-model="$i18n.locale">
			<option
				v-for="locale in $i18n.availableLocales"
				:key="`locale-${locale}`"
				:value="locale"
			>
				{{ locale }}
			</option>
		</select>
	</div>
	<h1>{{ $t('message.hello') }}</h1>
	<h2>{{ $t('message.salute', { name: userName, surname: userSurname }) }}</h2>
	<p>{{ $t('message.content') }}</p>
	<p>{{ $t('message.products', { count: 5 }) }}</p>
	<p>{{ $tc('message.comments', 5) }}</p>
</template>

<script lang="ts" setup>
	import { ref } from 'vue';

	const userName = ref('Iván');
	const userSurname = ref('Verdugo');
</script>

<style></style>
