/* Manage Audio */
import {NativeAudio} from '@capgo/native-audio'

export default abstract class Audio {
    protected assetId:string;
    protected audioName:string;
    protected channel:number;
    protected pathComplete:string;
    protected _isPreload:boolean;
    readonly _defaultPath:string = "assets/sounds/";
    readonly _logError:Array<Object> = []
    
    constructor(audioName:string, channel:number, path:string) {
        this._isPreload = false;
        this.assetId = audioName + channel;
        this.audioName = audioName;
        this.channel = channel;
        this.pathComplete = this._defaultPath + path;
    }

    get isPreload() {
        return this._isPreload;
    }

    async preload() {
        this._isPreload = await NativeAudio.preload({
            assetId: this.assetId,
            assetPath: `${this.pathComplete}${this.audioName}.mp3`,
            audioChannelNum: this.channel,
            isUrl: false
        }).then(() => {
            return true;
        }).catch((error) => {
            //TODO : gérer les log des erreurs
            this._logError.push(error);
            return this._isPreload;
        });
    }
}