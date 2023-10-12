/* Manage Audio */
import {NativeAudio} from '@capgo/native-audio'

export default abstract class Audio {
    protected audioName:string;
    readonly _defaultPath:string = "../../assets/sounds/";
    readonly _logError:Array<Object> = []
    
    constructor(audioName:string, channel:number, path:string) {
        const pathComplete = this._defaultPath + path;
        this.audioName = audioName + channel;
        NativeAudio.preload({
            assetId: this.audioName,
            assetPath: `${pathComplete}${audioName}.mp3`,
            audioChannelNum: channel,
            isUrl: true
        }).catch((error)=> {
            // à priori rien de particulier à faire dans le cas 
            this._logError.push(error);
        });
    }

}