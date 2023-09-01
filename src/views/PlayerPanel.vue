<template>
    <ion-card>
      <ion-card-header>
        <!-- TODO: Insérer un nom de joueur -->
        <ion-card-title>Dan</ion-card-title>
      </ion-card-header>
  
      <ion-card-content>
        <ion-button fill="clear" shape="round">
            <ion-icon slot="icon-only" :icon="addCircle"></ion-icon>
        </ion-button>
        <!-- 5 pv -->
        <ion-icon slot="icon-only" :icon="heartOutline"></ion-icon>
        <ion-icon slot="icon-only" :icon="heartOutline"></ion-icon>
        <ion-icon slot="icon-only" :icon="heartOutline"></ion-icon>
        <ion-icon slot="icon-only" :icon="heartOutline"></ion-icon>
        <ion-icon slot="icon-only" :icon="heart"></ion-icon>
        <ion-icon slot="icon-only" :icon="heart"></ion-icon>
        <!-- == -->
        <ion-button fill="clear" shape="round">
            <ion-icon slot="icon-only" :icon="removeCircle"></ion-icon>
        </ion-button>
      </ion-card-content>
    </ion-card>
  </template>
  
  <!-- TODO: au clic, son + ajout ou suppresion de coeur -->
  <script lang="ts">
    import { IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle } from '@ionic/vue';
    import { addCircle, heartOutline, removeCircle, heart } from 'ionicons/icons';
    import { defineComponent } from 'vue';
  
    export default defineComponent({
      components: { IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle },
      setup() {
        return { addCircle, heartOutline, removeCircle, heart };
      },
    });
  </script>
  <!-- TODO : retourner avec une classe -->
  <!-- TODO : faire des classes avec des couleurs selon les thèmes du CSS principal -->
  <style scoped>
    ion-card {
      --background: #000;
      --color: #9efff0;
    }
  
    ion-card-title {
      --color: #52ffe4;
    }
  
    ion-card-subtitle {
      --color: #d1fff8;
    }

    ion-button {
      --color: #9efff0;
    }

    .envers {
        transform: rotate(180deg); /* Équivalent à rotateZ(45deg) */
    }

  </style>