import { Injectable } from '@angular/core';
import { Location } from '@angular/common';
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
import { BackButtonEvent } from '@ionic/core';
import { App } from '@capacitor/app';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GlobalsServices
{
  url: string = this.router.url;
  mode: any = false;
  statusbar: any = StatusBar;
  internet: boolean = false;
  search: boolean = false;
  interval: any
  sidebar: boolean = true
  logginIn: boolean = false
  defaultModalConfig: any = {
    component: null,
    id: null,
    backdropDismiss: true,
    mode: 'md',
    initialBreakpoint: 1.0,
    breakpoints: [0, 1.0],
    canDismiss: true,
    cssClass: '',
    componentProps: {}
  }
  spinnerText: string = 'Processing'
  country: string = ''
  language: string = ''

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
    public route: ActivatedRoute, public location: Location
  ){
    this.location.onUrlChange(x => {
      this.url = x;
    });
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


  async openModal(page: any, data: object, height: number = 100, isCenter: boolean = false, cssClass: string = 'modal-center', id?: any, backdropDismiss?: boolean) {
    let modalConfig = this.defaultModalConfig;
    if(height == 100) {
      delete modalConfig.initialBreakpoint;
      delete modalConfig.breakpoints
    } else {
      modalConfig.breakpoints = [0, height / 100]
      modalConfig.initialBreakpoint = height / 100
    }
    //modalConfig.cssClass = (isCenter == false) ? cssClass : `modal-center`
    modalConfig.cssClass = (isCenter == false) ? `modal-bottom` : cssClass
    // modalConfig.cssClass = (!this.platform.is('mobile')) ? 'modal-sidebar' : `${css}`
    modalConfig.componentProps = data
    modalConfig.component = page
    modalConfig.id = id
    modalConfig.backdropDismiss = backdropDismiss
    let modal: any = await this.modalCtrl.create(modalConfig)
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

  toogleMenu() {
    this.sidebar = (!this.sidebar) ? true : false ;
  }

  toogleSearch() {
    this.search = (!this.search) ? true : false ;
  }

  exitApp() {
    const routerEl = document.querySelector('ion-router');
    document.addEventListener('ionBackButton', (ev: BackButtonEvent) => {
      ev.detail.register(-1, () => {
        const path = window.location.pathname;
        if (path === routerEl.root) {
          const choice = window.confirm("Do you want to exit app?")
          if(choice) App.exitApp();
        }
      });
    });
  }

  getFirstLetters(str): any {
    const firstLetters = str
      .split(' ')
      .map(word => word[0])
      .join('');

    return firstLetters;
  }

}
