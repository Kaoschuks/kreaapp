import { Injectable, inject } from '@angular/core';
import {
  ActionPerformed,
  PushNotificationSchema,
  PushNotifications,
  Token,
} from '@capacitor/push-notifications';
import { Platform } from '@ionic/angular';
import { GlobalsServices } from './globals.service';
// import { LocalNotificationActionPerformed, LocalNotifications } from '@capacitor/local-notifications';


@Injectable({
  providedIn: 'root',
})
export class FcmServices {
  token: any
  request: any;

  private platform: Platform = inject(Platform);

  async init() {
    return await new Promise(async (resolve, reject) => {
      try{
        this.request = await PushNotifications.requestPermissions();
        if(this.platform.is('capacitor')) this.token = await this.processToken()
        resolve({})
      } catch (ex: any) {
        reject({
          error: ex.error || ex.message || ex
        })
      }
    })
  }

  async processToken() {
    return await new Promise(async (resolve, reject) => {
      try{
        if (this.request && this.request['receive']) {
          const token: any = await this.getToken();
          resolve(token)
        } else {
          throw new Error('Push notification error on register' + this.request);
        }
      } catch (ex: any) {
        reject({
          error: ex.error || ex.message || ex
        })
      }
    })
  }

  private async getToken() {
    return await new Promise((resolve, reject) => {
      try {
        PushNotifications.register();
        PushNotifications.addListener('registration', (token: Token) => {
          resolve(token.value);
        });
      } catch (ex) {
        reject(ex);
      }
    });
  }

  private async getPushNotification() {
    return await new Promise(async (resolve, reject) => {
      try {
        PushNotifications.addListener(
          'pushNotificationReceived',
          (notification: PushNotificationSchema) => {
            resolve(notification);
          }
        );
        PushNotifications.addListener(
          'pushNotificationActionPerformed',
          (notification: ActionPerformed) => {
            resolve(notification);
          }
        );
      } catch (ex) {
        PushNotifications.addListener('registrationError', (error: any) => {
          reject('Error on registration: ' + JSON.stringify(error));
        });
        reject('Error on registration: ' + JSON.stringify(ex));
      }
    });
  }

  async showPushNotification() {
    try {
      const globals: GlobalsServices = inject(GlobalsServices);
      // globals.listenNotificationEvent();
      const data: any = await this.getPushNotification()
  
      data.data['title'] = data.title || data.data.title
      data.data['body'] = data.body || data.data.body

      globals.showNotification({
        title: data.data.title,
        body: data.data.body,
        schedule: {
          at: new Date(Date.now()),
        },
      })
    } catch (error) {
      console.log(error)
    }
    
  }
}
