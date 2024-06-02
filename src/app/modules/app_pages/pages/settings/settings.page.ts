import { Component, OnInit, inject } from '@angular/core';
import { TitleCasePipe } from '@angular/common';
import { IonAvatar, IonButton, IonButtons, IonCard, IonContent, IonFabButton, IonHeader, IonIcon, IonImg, IonItem, IonLabel, IonList, IonListHeader, IonMenuButton, IonTitle, IonToggle, IonToolbar } from '@ionic/angular/standalone';
import { GlobalsServices } from 'src/app/core';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
  standalone: true,
  imports: [
    TitleCasePipe,
    IonContent, IonButton, IonListHeader, IonLabel, IonList, IonCard, IonAvatar, IonFabButton, IonToggle, IonIcon, IonImg, IonItem,
  ]
})
export class SettingsPage implements OnInit {
  globals: GlobalsServices = inject(GlobalsServices);
  isDark: boolean = this.globals.getDeviceThemeMode ? true : false

  ngOnInit() {
  }

  async changeTheme() {
    this.globals.loading.show(`Changing theme to ${(!this.isDark) ? 'dark' : 'light'} mode`);
    
    await this.globals.changeTheme( (!this.isDark) ? 'dark' : 'light' )
    setTimeout(() => {
      this.isDark = (this.isDark) ? false : true;
      this.globals.loading.hide();
    }, 2000)
  }

  onDeleteAccount() {
    this.globals.modalData = {
      title: 'Are you sure',
      color: 'danger',
      iconName: 'alert-circle-outline',
      description:
        'Your account will be permanently deleted, do you want to proceed ?',
      buttons: [
        {
          action: 'no',
          text: 'No, Cancel',
        },
        {
          action: 'deleteaccount',
          text: 'Yes, Delete Account',
        },
      ],
    };
    this.globals.openModal('successmodal')
  }

  onLogout() {
    this.globals.modalData = {
      title: 'Logging Out?',
      color: 'danger',
      iconName: 'alert-circle-outline',
      description:
        'Your account will be permanently deleted, do you want to proceed ?',
      buttons: [
        {
          action: 'no',
          text: 'No, Cancel',
        },
        {
          action: 'logout',
          text: 'Yes, Log Out',
        },
      ],
    };
    this.globals.openModal('successmodal')
  }

}
