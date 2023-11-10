<template>
	<NavMenu />
	<router-view />
</template>

<script lang="ts" setup>
	import NavMenu from './components/NavMenu.vue';
</script>
<style lang="scss">
	#app {
		font-family: Avenir, Helvetica, Arial, sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		text-align: center;
		color: #2c3e50;
	}
</style>
