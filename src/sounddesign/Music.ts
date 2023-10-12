import Audio from '@/sounddesign/Audio'
import {NativeAudio} from '@capgo/native-audio'

export default class Music extends Audio {

    constructor(audioName:string, channel:number) {
        super(audioName, channel, 'musics/');
    }

    loop() {
        NativeAudio.loop({
            assetId: this.audioName
        })
    }

    pause() {
        NativeAudio.pause({
            assetId: this.audioName
        })
    }

    resume() {
        NativeAudio.resume({
            assetId: this.audioName
        })
    }

}