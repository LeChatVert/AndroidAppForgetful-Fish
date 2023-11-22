/* Manage Audio */
import {NativeAudio} from '@capgo/native-audio'

export default abstract class Audio {
    protected audioName:string;
    readonly _defaultPath:string = "assets/sounds/";
    readonly _logError:Array<Object> = []
    
    constructor(audioName:string, channel:number, path:string) {
        const pathComplete = this._defaultPath + path;
        this.audioName = audioName + channel;
        //TODO: sortir le preload du constructeur pour pouvoir faire un await et ne plus avoir le premier message du preload
        NativeAudio.preload({
            assetId: this.audioName,
            assetPath: `${pathComplete}${audioName}.mp3`,
            audioChannelNum: channel,
            isUrl: false
        }).then(() => {
            console.log("plop");
            //TODO: mettre quelque chose pour savoir facilement si l'élément a été preload ou pas
        }).catch((error) => {
            // à priori rien de particulier à faire dans ce cas.
            // On log les erreurs au cas où.
            this._logError.push(error);
        });
    }

}