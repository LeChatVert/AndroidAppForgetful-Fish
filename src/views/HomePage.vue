<template>
  <ion-page>
    <ion-content class="ion-padding">
      <player-panel class="envers" :etat="joueur1"></player-panel>
      <menu-content @reset="resetCompteurs"></menu-content>
      <player-panel :etat="joueur2"></player-panel>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { IonContent, IonPage } from '@ionic/vue';
import PlayerPanel from './PlayerPanel.vue';
import MenuContent from './MenuContent.vue';
import { defineComponent } from 'vue';

const etatInitialJoueurs:Object = {
  nom: "Dan",
  compteur: 5,
  pointsDeVie: 5,
}

export default defineComponent({
  components: {
    IonContent,
    IonPage,
    PlayerPanel,
    MenuContent,
  },
  inject: ['dataAudio'],
  data() {
    this.dataAudio.loop({
      assetId: 'musicDan'
    });

    const joueur1 = Object.assign({}, etatInitialJoueurs);
    const joueur2 = Object.assign({}, etatInitialJoueurs);

    return {
      joueur1,
      joueur2,
    }
  },
  methods: {
    resetCompteurs() {
      this.joueur1.compteur = etatInitialJoueurs.compteur;
      this.joueur2.compteur = etatInitialJoueurs.compteur;
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
