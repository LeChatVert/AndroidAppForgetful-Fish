<template>
  <ion-page class="main noPadding">
      <ion-grid class="noPadding">
        <ion-row>
          <ion-col class="noPadding">
            <player-panel class="envers panelJoueurUn" :etat="joueur1" :audio-manager="audioManager"></player-panel>
            <menu-content @reset="resetCompteurs" @switchSongOn="switchSongOn" @switchMusicOn="switchMusicOn"></menu-content>
            <player-panel class="panelJoueurDeux" :etat="joueur2" :audio-manager="audioManager"></player-panel>
          </ion-col>
        </ion-row>
      </ion-grid>
  </ion-page>
</template>

<script lang="ts">
import { IonContent, IonPage, IonCol, IonGrid, IonRow } from '@ionic/vue';
import PlayerPanel from './PlayerPanel.vue';
import MenuContent from './MenuContent.vue';
import { defineComponent } from 'vue';

import AudioManager from '@/sounddesign/AudioManager';

type JoueurAttributes = {
  [key: string]: string|number,
  nom: string,
  compteur: number,
  pointsDeVie: number,
};

const etatInitialJoueurs:JoueurAttributes = {
  nom: "Dan",
  compteur: 5,
  pointsDeVie: 5,
};

export default defineComponent({
  components: {
    IonContent,
    IonPage,
    PlayerPanel,
    MenuContent, IonCol, IonGrid, IonRow,
  },
  data() {
    let audioManager:AudioManager = new AudioManager();
    audioManager.buildSounds().then(() => audioManager.runMusic());

    const joueur1 = Object.assign({}, etatInitialJoueurs);
    const joueur2 = Object.assign({}, etatInitialJoueurs);
 
    return {
      joueur1,
      joueur2,
      audioManager,
    }
  },
  methods: {
    resetCompteurs() {
      this.joueur1.compteur = etatInitialJoueurs.compteur;
      this.joueur2.compteur = etatInitialJoueurs.compteur;
      this.audioManager.runSound(0, "wave");
    },
    
    switchMusicOn(isChecked:boolean) {
      if(isChecked){
        this.audioManager.resumeMusic();
      } else {
        this.audioManager.pauseMusic();
      }
    },
    
    switchSongOn(isChecked:boolean) {
      this.audioManager.isSettingSoundOn = isChecked;
    }
  }
});

</script>

<style scoped>
/*TODO: créer des classes spécifique pour chaque cas particulier */
.main {
    background: url('/dandan_bg.webp');
    background-position: center;
    background-repeat:no-repeat;
  }

  ion-grid {
    margin-inline: revert;
  }

  ion-row {
    height: 100%;
  }

  ion-col {
    display: grid;
  }
  
  .panelJoueurUn {
    align-self: end;
  }
  .panelJoueurDeux {
    align-self: start;
  }

  .noPadding {
    padding: 0px;
  }
</style>
