
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
        this._isSettingSoundOn = true;
    }

    get music() {
        return this._music;
    }

    get sounds() {
        return this._sounds;
    }

    get isSettingSoundOn() {
        return this._isSettingSoundOn;
    }

    set isSettingSoundOn(toggle:boolean) {
        this._isSettingSoundOn = toggle;
    }

    buildSounds() {
        this.sounds.push({
            bloup: new Sound("bloup", ++this._channel),
            splash: new Sound("splash", ++this._channel),
            wave: new Sound("wave", ++this._channel),
        });
    }

    runMusic() {
        this.music.loop();
    }

    pauseMusic() {
        this.music.pause();
    }

    resumeMusic() {
        this.music.resume();
    }

    runSound(set:number, soundName:string) {
        if(this.isSettingSoundOn) {
            this.sounds[set][soundName].play();
        }
    }
}