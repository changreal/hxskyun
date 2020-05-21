import { LoadingController, ToastController } from '@ionic/angular';

export abstract class BaseUI {
    constructor() {

    }

    /**
     * loading加载页面
     * @param {LoadingController} loadingCtrl
     * @param {string} message
     * @returns {Loading}
     * @memberof BaseUI
     */
    protected async showLoading(loadingCtrl: LoadingController,
            message: string) {
            const loader = await loadingCtrl.create({
                message: message,
                duration: 20
            });
            await loader.present();
            return loader;
         }

    /**
     * Toast全局提示
     * @param {ToastController} toastCtrl
     * @param {string} message
     * @returns {toast}
     * @memberof BaseUI
     */
    protected async showToast(toastCtrl: ToastController, message: string) {
        const toast = await toastCtrl.create({
            message: message,
            duration: 2000,  // 默认展示的时长
            position: 'top'
        });
        await toast.present();
        return toast;
    }
}
