import { ErrorHandler, Injectable, Injector, inject } from "@angular/core";
import { StatusBar, Style, Animation } from '@capacitor/status-bar';
import {
  ActionSheetController,
  AlertController,
  LoadingController,
  MenuController,
  NavController,
  Platform,
  ToastController,
} from "@ionic/angular";

import { ActivationStart, Router } from "@angular/router";
import { LocalNotifications } from "@capacitor/local-notifications";
import { NavigationBar } from '@hugotomazi/capacitor-navigation-bar';
import { StorageService } from "./storage";
import { configModel, startupTime } from "src/app/core";
import { ModalController } from "@ionic/angular/standalone";
import { NgxSpinnerService } from "ngx-spinner";
import { SplashScreen } from "@capacitor/splash-screen";

const LOGTAG = '[GlobalErrorHandlerService]';

@Injectable({
  providedIn: "root",
})

export class GlobalsServices {
  
  private navigatorBar: any = NavigationBar
  private injector: Injector = inject(Injector)
  public platform: Platform = inject(Platform)
  public loadingCtrl: LoadingController = inject(LoadingController)
  public actionSheetCtrl: ActionSheetController = inject(ActionSheetController)
  public menuCtrl: MenuController = inject(MenuController)
  public modalCtrl: ModalController = inject(ModalController)
  public spinner: any = inject(NgxSpinnerService)


  config!: configModel
  modalData: any = {
    buttons: null,
    color: null,
    description: null,
    title: null
  }
  pageData: any
  pageColor: string = 'white'
  appLoading: boolean = true;
  pageRefresh: boolean = false;
  loading: any = {
    hide: async () => {
      await this.loadingCtrl.dismiss();
    },
    show: async (message: string, duration: number = 0) => {
      await this.showLoader(message, duration)
    },
  }
  getDeviceThemeMode!: string

  private async showLoader(message: string, duration: number) {
    let opts: any = {
      message: message,
      backdropDismiss: false,
      keyboardClose: true,
      showBackdrop: true,
      duration: duration,
    }
    if(duration == 0) delete opts.duration
    const loading = await this.loadingCtrl.create(opts);
    await loading.present();
  }

  private setUrlTitle() {
    const router: Router = this.injector.get<Router>(Router);
    router.events.subscribe((event) => {
      if (event instanceof ActivationStart) this.pageData = event.snapshot.data;
    });
  }

  async initializeApp() {
    try {
      this.setTheme()
      await this.platform.ready();
      await Promise.all([
        await SplashScreen.hide(),
        await this.menuCtrl.enable(false),
        await this.requestPermission(),
      ])
      this.setUrlTitle()
      this.exitApp()
      
      setTimeout(() => {
        this.appLoading = false;
      }, startupTime);
    } catch (err: any) {
      this.appLoading = false; 
      console.log(err);
    }
  }

  async requestPermission() {
    await LocalNotifications.checkPermissions();
  }

  async showNotification(data: {
    title: string;
    body: string;
    schedule: any;
  }) {
    const notifs = await LocalNotifications.schedule({
      notifications: [
        {
          title: data.title,
          body: data.body,
          id: Math.floor(Math.random() * 10000) + 1,
          schedule: (data.schedule) 
            ? data.schedule
            : { 
              at: new Date(Date.now() + 500),
              repeats: false,
            },
        },
      ],
    });
  }

  async notifyAlert(title: string = "Error", message: string) {
    const alertCtrl: AlertController = this.injector.get<AlertController>(AlertController);
    const alert = await alertCtrl.create({
      header: title,
      subHeader: message,
      buttons: ["Close"],
    });
    await alert.present();
  }

  async toastAlert(
    message: string,
    { duration = 3000, cssClass = "toast-primary", position = "bottom" } = {}
  ) {
    const toastCtrl: ToastController = this.injector.get<ToastController>(ToastController);
    const toast = await toastCtrl.create({
      message: message,
      duration: duration,
      position:
        position == "top" ? "top" : position == "middle" ? "middle" : "bottom",
      cssClass: cssClass,
    });
    toast.present();
  }

  async navigate(path: string, subpage: boolean = true) {
    const navCtrl: NavController = this.injector.get<NavController>(NavController);
    subpage
      ? await navCtrl.navigateForward(path)
      : await navCtrl.navigateRoot(path);
  }

  openModal(id: string, data: any = {}, title: string = '') {
    this.modalData[id] = {
      'isOpen': true,
      'data': data,
      'title': title
    }
    this.clickId(id)
  }

  closeModal(id: string) {
    this.modalData[id] = {
      'isOpen': false
    };
    delete this.modalData[id]
  }

  clickId(id: string) {
    document.getElementById(id)?.click()
  }

  async loggedOut() {
    const storageService: StorageService =
      this.injector.get<StorageService>(StorageService);

    this.config.login = false;
    await storageService.clear();
    this.menuCtrl.enable(false);
    this.navigate("/auth/login", false);
  }

  changeStatusBarColor(color: string = '', isLight: boolean, noStatus: boolean = false, timeout: number = startupTime) {
    if(this.platform.is('capacitor')) {
      setTimeout(async () => {
        await StatusBar.setBackgroundColor({ color: color }); 
        await StatusBar.setOverlaysWebView({ overlay: noStatus })
        await StatusBar.show({ animation: Animation.Slide })
      }, 100)
      setTimeout(async () => {
        await StatusBar.setStyle({ style: (isLight) ? Style.Light : Style.Dark })
      }, timeout)
    }
  }

  async setTheme() {
    const storage = this.injector.get<StorageService>(StorageService)
    const theme: string = await storage.getItem('theme')
    const isDark: boolean = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches
    this.getDeviceThemeMode = (theme) ? theme : isDark ? 'dark' : 'light';

    if(theme === 'light')  await this.changeTheme(this.getDeviceThemeMode, false)
    if(this.getDeviceThemeMode === 'dark') {
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)');
      await this.changeTheme(this.getDeviceThemeMode, prefersDark.matches);
      prefersDark.addEventListener('change', async (mediaQuery) => await this.changeTheme(this.getDeviceThemeMode, mediaQuery.matches));
    }
  }

  async changeTheme(value: string, shouldAdd: boolean) {
    document.documentElement.classList.toggle('ion-palette-dark', shouldAdd);
    switch (value) {
      case "dark":
        this.changeStatusBarColor('#1e2023', false, false, 700)
        if(this.platform.is('android')) await this.navigatorBar.setColor({
          color: '#1e2023'
        })
        break;
      case "light":
        this.changeStatusBarColor('#ffffff', true, false, 700)
        if(this.platform.is('android')) await this.navigatorBar.setColor({
          color: '#000000'
        })
        break;
    }
    let storage = this.injector.get<StorageService>(StorageService)
    storage.saveItem('theme', value)
    this.getDeviceThemeMode = value;
    // this.changeStatusBarColor('#203db4', false, false, 1000)
  }

  exitApp() {
    this.platform.backButton.subscribeWithPriority(-1, async () => {
      // if (this.router.url === '/home') await App.exitApp();
    });
  }
}


@Injectable({
  providedIn: 'root',
})
export class GlobalErrorHandlerService implements ErrorHandler {
  constructor(private injector: Injector) {}

  public handleError(error: unknown): void {
    this.handle(error);
  }

  private async handle(error: unknown): Promise<void> {
    try {
      const message = this.getMessageFromUnknownError(error);
      await this.showErrorAlert(message);
    } catch (errorHandlerError) {
      console.error(`${LOGTAG} Internal exception:`, errorHandlerError);
    }
  }

  private getMessageFromUnknownError(error: unknown): string {
    let message = 'An unknown error has occurred.';
    if (error instanceof Object && 'rejection' in error) {
      error = (error as any).rejection;
    }
    if (error instanceof Error && error.message) {
      message = error.message;
    }
    return message;
  }

  private async showErrorAlert(message: string): Promise<void> {
    const globalService: GlobalsServices =
      this.injector.get<GlobalsServices>(GlobalsServices);
    console.log(message);
    // await globalService.toastAlert(message);
  }
}