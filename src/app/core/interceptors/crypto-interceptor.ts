// // encryption.service.ts
// import * as CryptoJS from 'crypto-js';

// @Injectable({
//   providedIn: 'root'
// })
// export class EncryptionService {
//   // Add methods for encryption and decryption here
  
//   encryptData(data: any): string {
//     // Implement encryption logic using CryptoJS
//   }
  
//   decryptData(encryptedData: string): any {
//     // Implement decryption logic using CryptoJS
//   }
// }

// // encrypt-interceptor.ts
// import { Injectable } from '@angular/core';
// import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
// import { Observable } from 'rxjs';
// import { EncryptionService } from './encryption.service';

// @Injectable()
// export class EncryptInterceptor implements HttpInterceptor {
//   constructor(private encryptionService: EncryptionService) {}

//   intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
//     const encryptedRequest = this.encryptRequest(request);
//     return next.handle(encryptedRequest);
//   }

//   private encryptRequest(request: HttpRequest<any>): HttpRequest<any> {
//     // Encrypt request payload
//     const encryptedData = this.encryptionService.encryptData(request.body);
//     return request.clone({ body: encryptedData });
//   }
// }

// // decrypt-interceptor.ts
// import { Injectable } from '@angular/core';
// import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
// import { Observable } from 'rxjs';
// import { EncryptionService } from './encryption.service';

// @Injectable()
// export class DecryptInterceptor implements HttpInterceptor {
//   constructor(private encryptionService: EncryptionService) {}

//   intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
//     return next.handle(request).pipe(
//       map((response) => {
//         // Decrypt response data
//         const decryptedResponse = this.decryptResponse(response);
//         return response.clone({ body: decryptedResponse });
//       })
//     );
//   }

//   private decryptResponse(response: HttpEvent<any>): any {
//     // Decrypt response data
//     return this.encryptionService.decryptData(response.body);
//   }
// }

// // app.module.ts
// import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
// import { NgModule } from '@angular/core';
// import { BrowserModule } from '@angular/platform-browser';
// import { EncryptInterceptor } from './encrypt-interceptor';
// import { DecryptInterceptor } from './decrypt-interceptor';

// @NgModule({
//   imports: [BrowserModule, HttpClientModule],
//   providers: [
//     EncryptionService,
//     { provide: HTTP_INTERCEPTORS, useClass: EncryptInterceptor, multi: true },
//     { provide: HTTP_INTERCEPTORS, useClass: DecryptInterceptor, multi: true }
//   ],
//   bootstrap: [AppComponent]
// })
// export class AppModule {}
