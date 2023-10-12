<template>
  <ion-page>
    <ion-content class="ion-padding">
      <player-panel class="envers" :etat="joueur1" :audio-manager="audioManager"></player-panel>
      <menu-content @reset="resetCompteurs" @switchSongOn="switchSongOn" @switchMusicOn="switchMusicOn"></menu-content>
      <player-panel :etat="joueur2" :audio-manager="audioManager"></player-panel>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { IonContent, IonPage, IonCol, IonGrid, IonRow } from '@ionic/vue';
import PlayerPanel from './PlayerPanel.vue';
import MenuContent from './MenuContent.vue';
import { defineComponent, computed } from 'vue';

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
    MenuContent,
  },
  data() {
    let audioManager:AudioManager = new AudioManager();
    audioManager.runMusic();
    audioManager.buildSounds();

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
#container {
  text-align: center;
  
  position: absolute;
  left: 0;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
}

#container strong {
  font-size: 20px;
  line-height: 26px;
}

#container p {
  font-size: 16px;
  line-height: 22px;
  
  color: #8c8c8c;
  
  margin: 0;
}

#container a {
  text-decoration: none;
}
</style>
