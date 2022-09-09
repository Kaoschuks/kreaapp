import { Injectable } from '@angular/core';
import { AlertController, 
  ModalController, 
  ToastController, 
  LoadingController,
  ActionSheetController,
  Platform,
  NavController,
  MenuController
} from '@ionic/angular';
import { StatusBar, Style } from '@capacitor/status-bar';
import { LocalNotifications } from '@capacitor/local-notifications';

import { Router, ActivatedRoute } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';

@Injectable({
  providedIn: 'root'
})
export class GlobalsServices
{
  mode: any = false;
  statusbar: any = StatusBar;
  internet: boolean = false;
  interval: any

  constructor(
    public platform: Platform,
    public spinner: NgxSpinnerService,
    public navCtrl: NavController,
    public loading: LoadingController,
    public alertCtrl: AlertController, 
    public modalCtrl: ModalController,
    public toastCtrl: ToastController,
    public actionSheetCtrl: ActionSheetController,
    public router: Router,
    private navController: NavController,
    public menuCtrl: MenuController,
    public route: ActivatedRoute
  ){
  }

  changeThemeMode(): void {
    document.getElementById('body').className = (this.mode) ? 'dark' : 'light';
    if(this.platform.is('capacitor')) {
      StatusBar.setStyle({
        style: (this.mode) ? Style.Light : Style.Dark
      })
      StatusBar.setBackgroundColor({
        color: '#00113e',
      })
    }
  }

  async showLocalNotification(data: { title: string, body: string, id: number, schedule: any}) {
    const notifs = await LocalNotifications.schedule({
      notifications: [
        {
          title: data.title,
          body: data.body,
          id: data.id ? data.id : 1 ,
          schedule: data.schedule,
          sound: null,
        }
      ]
    });
  }

  async notifyAlert(title: string = "Error", message) {
    let alert = await this.alertCtrl.create({
      header: title,
      subHeader: message,
      buttons: ['Close']
    });
    alert.present();
  }

  async toastAlert(message: string, { duration = 3000, cssClass = "toast-deafult", position = "top" } = {}) {
    const toast = await this.toastCtrl.create({
      message: message,
      duration: duration,
      position: (position == 'top') ? 'top' : (position == 'middle') ? 'middle' : 'bottom',
      cssClass: cssClass
    });
    toast.present();
  }


  async openModal(page: any, data: object, css: string = '') {
    let modal: any = await this.modalCtrl.create({
      component: page,
      mode: 'ios',
      swipeToClose: true,
      cssClass: (!this.platform.is('mobile')) ? 'modal-sidebar' : `${css}`,
      componentProps: data
    })
    await modal.present();
    return modal;
  }

  navigate(path: string, subpage: boolean = true) {
    (subpage) 
    ? this.router.navigate([path], { replaceUrl: subpage })
    : this.navController.navigateRoot(path);
  }

  generateID() {
    let code = "";
    var characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    var charactersLength = characters.length;
    for (var i = 0; i < 15; i++) {
      code += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return code;
  }

}
