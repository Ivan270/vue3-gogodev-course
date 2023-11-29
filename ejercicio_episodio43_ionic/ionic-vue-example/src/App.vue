<template>
	<ion-page>
		<ion-header>
			<ion-toolbar>
				<ion-title>Capacitor Plpugins</ion-title>
			</ion-toolbar>
		</ion-header>
		<ion-content class="padding">
			<img :src="imageUrl" />
			<ion-button color="medium" @click="makePhoto">Take photo</ion-button>
		</ion-content>
	</ion-page>
</template>

<script setup lang="ts">
	import { ref, Ref } from 'vue';
	import {
		IonHeader,
		IonToolbar,
		IonTitle,
		IonContent,
		IonPage,
		IonButton,
	} from '@ionic/vue';
	import { Camera, CameraResultType } from '@capacitor/camera';

	const imageUrl: Ref = ref();

	const makePhoto = async () => {
		const image = await Camera.getPhoto({
			quality: 80,
			allowEditing: true,
			resultType: CameraResultType.Uri,
		});
		imageUrl.value = image.webPath;
	};
</script>

<style scoped></style>
