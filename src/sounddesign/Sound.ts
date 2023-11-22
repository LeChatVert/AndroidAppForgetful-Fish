import Audio from '@/sounddesign/Audio'
import {NativeAudio} from '@capgo/native-audio'

export default class Sound extends Audio {
    
    constructor(audioName:string, channel:number) {
        super(audioName, channel, 'soundEffects/');
    }

    async play() {
        const soundIsItPlaying = await NativeAudio.isPlaying({
            assetId: this.assetId
        });
        
        if(!soundIsItPlaying.isPlaying){
            NativeAudio.play({
                assetId: this.assetId
            });
        }
    }

}