import Audio from '@/sounddesign/Audio'
import {NativeAudio} from '@capgo/native-audio'

export default class Sound extends Audio {
    
    constructor(audioName:string, channel:number) {
        super(audioName, channel, 'soundEffects/');
    }

    play() {
        NativeAudio.play({
            assetId: this.audioName
        });
    }

}