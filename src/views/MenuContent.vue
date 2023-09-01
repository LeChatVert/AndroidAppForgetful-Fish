<template>
  <!-- MEGA IMPORTANT : c'est l'id qui fait le lien entre le ion-menu-button et le ion-menu -->
    <ion-toolbar color="light" id="main-content">
      <!-- TODO : Sortir dans un autre composant -->
      <ion-button fill="clear" shape="round" id="reset-counters" slot="start">
        <ion-icon slot="icon-only" :icon="refreshOutline"></ion-icon>
      </ion-button>
      <ion-buttons slot="end">
        <ion-menu-button></ion-menu-button>
      </ion-buttons>
    </ion-toolbar>
    <ion-menu side="end" content-id="main-content">
      <ion-header>
        <ion-toolbar>
          <ion-title>Menu Content</ion-title>
        </ion-toolbar>
      </ion-header>
      <ion-content class="ion-padding" color="light">
        <ion-list>
          <ion-item>
            <ion-toggle>Musique</ion-toggle>
          </ion-item>
          <ion-item>
            <ion-toggle>Sons</ion-toggle>
          </ion-item>
          <ion-item>
            Crédits
            <ion-list :inset="true">
              <ion-item>
                <ion-label>Pokémon Yellow</ion-label>
              </ion-item>
              <ion-item>
                <ion-label>Mega Man X</ion-label>
              </ion-item>
              <ion-item>
                <ion-label>The Legend of Zelda</ion-label>
              </ion-item>
              <ion-item>
                <ion-label>Pac-Man</ion-label>
              </ion-item>
              <ion-item>
                <ion-label>Super Mario World</ion-label>
              </ion-item>
            </ion-list>
          </ion-item>
        </ion-list>
      </ion-content>
    </ion-menu>
  </template>
  
  <script lang="ts">
    import { IonContent, IonHeader, IonMenu, IonTitle, IonToolbar, IonItem, IonLabel, IonList, IonPage } from '@ionic/vue';
    import { refreshOutline } from 'ionicons/icons';
    import { defineComponent } from 'vue';
  
    export default defineComponent({
      components: {
        IonContent,
        IonHeader,
        IonMenu,
        IonTitle,
        IonToolbar,
        IonItem, IonLabel, IonList, IonPage
      },
      setup() {
        return { refreshOutline };
      },
    });
  </script>

<style scoped>

ion-button {
  --color: dark;
}


</style>