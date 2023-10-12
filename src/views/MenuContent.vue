<template>
  <!-- MEGA IMPORTANT : c'est l'id qui fait le lien entre le ion-menu-button et le ion-menu -->
    <ion-toolbar class="barreMenu" id="barre-transverse-content">
      <!-- TODO : Sortir dans un autre composant -->
      <ion-button fill="clear" shape="round" id="reset-counters" slot="start" @click="$emit('reset')">
        <ion-icon slot="icon-only" :icon="refreshOutline"></ion-icon>
      </ion-button>
      <ion-buttons slot="end">
        <ion-menu-button></ion-menu-button>
      </ion-buttons>
    </ion-toolbar>
    <ion-menu side="end" content-id="barre-transverse-content">
      <ion-header>
        <ion-toolbar>
          <ion-title>Menu Content</ion-title>
        </ion-toolbar>
      </ion-header>
      <ion-content class="ion-padding">
        <!--TODO: config des noms des joueurs-->
        <ion-list>
          <ion-item>
            <ion-toggle :enableOnOffLabels="true" @ion-change="$emit('switchMusicOn',$event.target.checked)" :checked="true">Musique</ion-toggle>
          </ion-item>
          <ion-item>
            <ion-toggle :enableOnOffLabels="true" @ion-change="$emit('switchSongOn',$event.target.checked)" :checked="true">Sons</ion-toggle>
          </ion-item>
          <ion-item>
            <ion-list :inset="true">
              <ion-item>
                <ion-label>Crédits</ion-label>
              </ion-item>
              <ion-item v-for="membre in equipe">
                <ion-label>{{ membre }}</ion-label>
              </ion-item>
            </ion-list>
          </ion-item>
          <ion-item>
            {{ licence }}
          </ion-item>
        </ion-list>
      </ion-content>
    </ion-menu>
  </template>
  
  <script lang="ts">
    import { IonContent, IonHeader, IonMenu, IonMenuButton, IonTitle, IonToolbar, IonItem, IonLabel, IonList, IonToggle, IonButton, IonIcon, IonButtons } from '@ionic/vue';
    import { refreshOutline } from 'ionicons/icons';
    import { defineComponent } from 'vue';
    import credit from '@/credits.json'

    export default defineComponent({
      components: {
        IonContent,
        IonHeader,
        IonMenu, IonMenuButton,
        IonTitle,
        IonToolbar,
        IonItem, IonLabel, IonList, IonButton, IonToggle, IonIcon, IonButtons
      },
      setup() {
        return { refreshOutline };
      },
      emits: ['reset', 'switchSongOn', 'switchMusicOn'],
      data() {
        return {
          licence: credit.licence,
          equipe: credit.equipe
        }
      },
    });
  </script>

<style scoped>

ion-button {
  --background: #3E594A;
  --color: #FFFFFF;
}

ion-menu::part(backdrop) {
  background-color: #A69576;
}

/*Suggestion:
ajouter une fine ombre portée pour la détacher visuellement du fond*/
ion-toolbar {
  --background: #3E594A;
}

.barreMenu {
  align-self: center;
}
</style>