<template>
	<h1>Counter</h1>
	<h2>Value: {{ counter }}</h2>
	<h3>Double: {{ double }}</h3>
	<button @click="increment">Increment</button>
</template>

<script lang="ts" setup>
	import { useStore } from 'vuex';
	import { computed, ComputedRef } from 'vue';

	const store = useStore();

	const counter: ComputedRef<number> = computed(() => store.state.counter);
	const double: ComputedRef<number> = computed(
		() => store.getters.doubleCounter
	);
	const increment = () => {
		return store.commit('setCounter', counter.value + 1);
	};
</script>

<style scoped lang="scss"></style>
