<template>
	<ion-page>
		<ion-header>
			<ion-toolbar>
				<ion-title>Hello world</ion-title>
			</ion-toolbar>
		</ion-header>

		<ion-content>
			<h1 class="ion-padding">Este es algún contenido</h1>
		</ion-content>

		<ion-footer>
			<ion-toolbar>
				<ion-title>Footer</ion-title>
			</ion-toolbar>
		</ion-footer>
	</ion-page>
</template>

<script setup lang="ts">
	import {
		IonPage,
		IonHeader,
		IonContent,
		IonFooter,
		IonToolbar,
		IonTitle,
	} from '@ionic/vue';
</script>

<style scoped></style>
