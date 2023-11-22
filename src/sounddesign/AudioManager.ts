
/* Manage Audio */
import {NativeAudio} from '@capgo/native-audio'
import Audio from './Audio'
import Music from './Music'
import Sound from './Sound'

type soundsAttributes = { 
    [key: string]:Sound,
    bloup:Sound,
    splash:Sound,
    wave:Sound
};

export default class AudioManager {

    private _music:Music;
    private _sounds:Array<soundsAttributes>;
    private _channel:number = 0;
    private _isSettingSoundOn:boolean;
    
    constructor() {
        /* Musique */
        this._music = new Music("musicDan", ++this._channel);
        /* Sons d'ambiance */
        this._sounds = [];
        this._sounds.push({
            bloup: new Sound("bloup", ++this._channel),
            splash: new Sound("splash", ++this._channel),
            wave: new Sound("wave", ++this._channel),
        });
        this._isSettingSoundOn = true;
    }

    get isSettingSoundOn() {
        return this._isSettingSoundOn;
    }

    set isSettingSoundOn(toggle:boolean) {
        this._isSettingSoundOn = toggle;
    }

    async buildSounds() {
        await this._music.preload();
        await this._sounds[0].bloup.preload();
        await this._sounds[0].splash.preload();
        await this._sounds[0].wave.preload();
    }

    runMusic() {
        if(this._music.isPreload){
            this._music.loop();
        }
    }

    pauseMusic() {
        this._music.pause();
    }

    resumeMusic() {
        this._music.resume();
    }

    runSound(set:number, soundName:string) {
        if(this.isSettingSoundOn) {
            this._sounds[set][soundName].play();
        }
    }
}