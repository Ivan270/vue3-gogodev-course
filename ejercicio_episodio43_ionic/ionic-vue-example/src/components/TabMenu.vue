<template>
	<ion-page>
		<ion-tabs>
			<ion-router-outlet></ion-router-outlet>
			<ion-tab-bar slot="bottom">
				<ion-tab-button tab="home" href="/home">
					<ion-label>Home</ion-label>
					<ion-icon :icon="home" />
				</ion-tab-button>
				<ion-tab-button tab="library" href="/library">
					<ion-label>Library</ion-label>
					<ion-icon :icon="library" />
				</ion-tab-button>
				<ion-tab-button tab="search" href="/search">
					<ion-label>Search</ion-label>
					<ion-icon :icon="search" />
				</ion-tab-button>
				<ion-tab-button tab="radio" href="/radio">
					<ion-label>Radio</ion-label>
					<ion-icon :icon="radio" />
				</ion-tab-button>
			</ion-tab-bar>
		</ion-tabs>
	</ion-page>
</template>

<script lang="ts" setup>
	import {
		IonPage,
		IonTabs,
		IonRouterOutlet,
		IonTabBar,
		IonTabButton,
		IonLabel,
		IonIcon,
	} from '@ionic/vue';
	import { radio, library, search, home } from 'ionicons/icons';
</script>

<style scoped></style>
