<template>
  <ion-card>
    <ion-card-header>
      <ion-card-title>{{ etat.nom }}</ion-card-title>
    </ion-card-header>

    <ion-card-content>
      <ion-button fill="clear" shape="round" @click="perdUnPv">
          <ion-icon slot="icon-only" :icon="removeCircle"></ion-icon>
      </ion-button>
      <!-- 5 pv -->
      <ion-icon slot="icon-only" v-for="coeur in compteCoeur" :icon="coeur"></ion-icon>
      <!-- == -->
      <ion-button fill="clear" shape="round" @click="gagneUnPv">
          <ion-icon slot="icon-only" :icon="addCircle"></ion-icon>
      </ion-button>
    </ion-card-content>
  </ion-card>
</template>
  
  <!-- TODO: au clic, son -->
  <script lang="ts">
    import { IonContent,IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonButton, IonIcon } from '@ionic/vue';
    import { addCircle, heartOutline, removeCircle, heart } from 'ionicons/icons';
    import { defineComponent } from 'vue';
  
    const coeurPlein:string = heart;
    const coeurVide:string = heartOutline;

    export default defineComponent({
      components: { IonContent,IonCard, IonCardContent, IonCardHeader, IonCardTitle, IonButton, IonIcon },
      setup() {
        return { addCircle, heartOutline, removeCircle, heart };
      },
      inject: ['dataAudio'],
      props: {
        etat: {
          type: Object,
          required: true,
        }
      },
      computed: {
        compteCoeur() {
          let tabDeCoeurs:Array<string> = [];
          for (let cp = 0; cp < this.etat.compteur; cp++) {
            tabDeCoeurs[cp] = coeurPlein;
            
          }
          if(tabDeCoeurs.length !== this.etat.pointsDeVie){
            for (let cv = this.etat.compteur; tabDeCoeurs.length < this.etat.pointsDeVie; cv++) {
              tabDeCoeurs[cv] = coeurVide;
            }
          }
          return tabDeCoeurs;
        }
      },
      methods: {
        perdUnPv(event:Event) {
          if(0 < this.etat.compteur) {
            this.etat.compteur--;
            this.dataAudio.play({
              assetId: 'bloup'
            });
          }
          if(0 == this.etat.compteur) {
            this.dataAudio.play({
              assetId: 'splash'
            });
          }
        },

        gagneUnPv(event:Event) {
          if(this.etat.compteur < this.etat.pointsDeVie) {
            this.etat.compteur++;
            this.dataAudio.play({
              assetId: 'bloup'
            });
          }
        },

        reset() {
          this.etat.compteur = this.etat.pointsDeVie;
          this.dataAudio.play({
            assetId: 'wave'
          });
        }
      }
    });
  </script>
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

    /* Retourne l'élément à 180° si la classe est appliqué dessus */
    .envers {
        transform: rotate(180deg);
    }

  </style>