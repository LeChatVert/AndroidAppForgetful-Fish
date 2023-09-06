import { createApp } from 'vue'
import App from './App.vue'
import router from './router';

import { IonicVue } from '@ionic/vue';

/* Core CSS required for Ionic components to work properly */
import '@ionic/vue/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/vue/css/normalize.css';
import '@ionic/vue/css/structure.css';
import '@ionic/vue/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/vue/css/padding.css';
import '@ionic/vue/css/float-elements.css';
import '@ionic/vue/css/text-alignment.css';
import '@ionic/vue/css/text-transformation.css';
import '@ionic/vue/css/flex-utils.css';
import '@ionic/vue/css/display.css';

/* Theme variables */
import './theme/variables.css';

/* Manage Audio */
import {NativeAudio} from '@capgo/native-audio'

const app = createApp(App)
  .use(IonicVue)
  .use(router);
  
router.isReady().then(() => {
  app.mount('#app');
});

/* Musique */
NativeAudio.preload({
    assetId: "musicDan",
    assetPath: "../assets/sounds/musics/musicDan.mp3",
    audioChannelNum: 1,
    isUrl: true
});

/* Sons d'ambiance */
NativeAudio.preload({
    assetId: "bloup",
    assetPath: "../assets/sounds/songs/bloup.mp3",
    audioChannelNum: 2,
    isUrl: false
});
NativeAudio.preload({
    assetId: "splash",
    assetPath: "../assets/sounds/songs/splash.mp3",
    audioChannelNum: 3,
    isUrl: false
});
NativeAudio.preload({
    assetId: "wave",
    assetPath: "../assets/sounds/songs/wave.mp3",
    audioChannelNum: 4,
    isUrl: false
});

app.provide('dataAudio', NativeAudio)