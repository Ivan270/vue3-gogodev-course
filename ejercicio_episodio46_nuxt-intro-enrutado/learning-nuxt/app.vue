<template>
	<div>
		<NuxtLayout name="default">
			<NuxtPage />
		</NuxtLayout>
	</div>
</template>
<script setup></script>
<style>
	nav {
		background-color: darkgray;
		padding: 20px;
	}
	nav ul {
		display: flex;
		column-gap: 10px;
		list-style-type: none;
		color: white;
	}
	nav ul li a:link {
		text-decoration: none;
		color: white;
	}
	nav ul li a:visited {
		text-decoration: none;
		color: white;
	}
	nav ul li a:hover {
		color: blueviolet;
	}
</style>
