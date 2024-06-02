import { Injectable, inject } from '@angular/core';
import { fileModel } from '../../interfaces';
import { WebWorkersProvider } from '../workers';

@Injectable()
export class ImageCacheWorker
{
  private webworker: WebWorkersProvider = inject(WebWorkersProvider)
    stored: string[] = []

    init() {
      if (typeof Worker !== 'undefined') {
        this.webworker.worker = new Worker('../assets/workers/image-loading.js');
        this.getAllImagesUrlFromTags();
        this.getImageDataFromWorker();
      }
    }

    private getAllImagesUrlFromTags() {
      let imgElements: any = document.querySelectorAll('ion-img[src]');
      console.log(imgElements)
      imgElements.forEach(async (imageElement: any) => {
        const imageURL = imageElement.getAttribute('src')
        this.webworker.sendRequestToWorker(imageURL);
      })
    }

    private getImageDataFromWorker() {
      this.webworker.receiveResponseFromWorker((event: any) => {
        let imageData: any = event.data;
        let imageElement: any = document.querySelectorAll(`ion-img[src='${imageData.imageURL}']`)
        const objectURL = URL.createObjectURL(imageData.blob)
        imageElement.onload = () => {
          // imageElement.removeAttribute('data-src')
          URL.revokeObjectURL(objectURL)
        }
        for (let i = 0; i < imageElement.length;  i++) {
          console.log("using web worker image data");
          imageElement[i].setAttribute('src', this.saveImageDataToStorge(i, objectURL))
        }
      })
    }

    private saveImageDataToStorge(i: any, data: any) {
      // this.globals.storage.saveItem(i, data)
      // .catch((err: any) => {
      //     console.log("Error saving file info", err);
      // });
      return data;
    }
  
  // async download_and_save_file(filedata: fileModel, type: string, location: string) {
  //   return await new Promise((resolve, reject) => {
  //     try {
  //       if (typeof Worker !== 'undefined') this.webworker.worker = new Worker('../assets/workers/file-saving.js');

  //       this.webworker.sendRequestToWorker(filedata.url);
  //       this.webworker.receiveResponseFromWorker(async (event: any) => {
  //         if(event.data.error) throw new Error(event.data.error);
  //         if(event.data.blob){
  //           let imageData: any = event.data;
  //           const entry: any = await this.file.writeFile(
  //             `${this.file.tempDirectory}/cache/${type}files/${location}`,
  //             `${filedata.name}.${filedata.ext}`, 
  //             imageData.blob, {
  //               replace: true
  //             }
  //           )
  //           resolve(
  //             this.webview.convertFileSrc(entry.nativeURL)
  //           );
  //         }
  //       })
  //     }catch(ex: any) {
  //       reject({error: ex.message || ex.error || ex})
  //     }
  //   })
  // }
}