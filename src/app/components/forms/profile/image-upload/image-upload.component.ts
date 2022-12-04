import { Component, Input, OnInit } from '@angular/core';
import * as blobutil from 'blob-util';
import { GlobalsServices } from 'src/app/services/core/globals';

@Component({
  selector: 'image-upload',
  templateUrl: './image-upload.component.html',
  styleUrls: ['./image-upload.component.scss'],
})
export class ImageUploadComponent implements OnInit {

  @Input() height: number = 200
  @Input() width: number = 200
  @Input() isEdit: boolean = true
  images: string = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzHQv_th9wq3ivQ1CVk7UZRxhbPq64oQrg5Q&usqp=CAU'

  constructor(
    private globals: GlobalsServices
    ) { }

  ngOnInit() {}

  async onFile(event) {
    try {
      event.preventDefault()
      this.images = await blobutil.blobToDataURL(event.target.files[0]);
    } catch(ex: any) {
      this.globals.toastAlert(ex, {
        cssClass: 'toast-danger'
      })
    }
  }
  
  async presentActionSheet() {
    const actionSheet = await this.globals.actionSheetCtrl.create({
      buttons: [{
        text: 'From Camera',
        icon: 'camera',
        handler: () => {
          document.getElementById('photo-capture').click()
        }
      }, {
        text: 'From Gallery',
        icon: 'image',
        handler: () => {
          document.getElementById('photo-upload').click()
        }
      }]
    });
    await actionSheet.present();

    const { role, data } = await actionSheet.onDidDismiss();
  }

}
