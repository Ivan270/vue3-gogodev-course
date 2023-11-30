<template>
	<nav>
		<ul>
			<li><NuxtLink to="/">Home</NuxtLink></li>
			<li><NuxtLink to="/about">About</NuxtLink></li>
			<li><NuxtLink to="/services">Services</NuxtLink></li>
			<li><NuxtLink to="/contact">Contact</NuxtLink></li>
			<li><NuxtLink to="/projects">Projects</NuxtLink></li>
		</ul>
	</nav>
	<slot />
</template>

<script lang="ts" setup></script>

<style scoped>
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
