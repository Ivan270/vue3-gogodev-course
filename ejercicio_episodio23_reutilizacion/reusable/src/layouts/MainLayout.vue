<template>
	<div class="container">
		<div class="auxbar">
			<AuxBar />
		</div>
		<div class="main-content-container">
			<div class="menu">
				<SideMenu />
			</div>
			<div class="main-content">
				<!-- Contenido específico de cada vista -->
				<slot name="main"></slot>
			</div>
			<div class="aux-content">
				<slot name="aux"></slot>
			</div>
		</div>
	</div>
</template>

<script lang="ts" setup>
	import AuxBar from '../components/AuxBar.vue';
	import SideMenu from '../components/SideMenu.vue';
</script>

<style scoped>
	.auxbar {
		min-height: 10vh;
		background-color: rgb(61, 61, 61);
		color: white;
		display: grid;
		place-content: center;
	}
	.main-content-container {
		min-height: 90vh;
		display: grid;
		grid-template-columns: repeat 12 (1fr);
		grid-template-rows: 1fr 1fr 1fr 1fr;
	}
	.menu {
		grid-column: 1 / 2;
		grid-row: 1 / 5;
		background-color: rgb(29, 29, 29);
		color: white;
		height: 100%;
	}
	.main-content {
		background-color: gray;
		color: white;
		display: grid;
		place-content: center;
		grid-column: 2 / 7;
		grid-row: 1 / 3;
	}
	.aux-content {
		background-color: aquamarine;
		display: grid;
		place-content: center;
		grid-column: 2 / 7;
		grid-row: 3 / 5;
	}
</style>
