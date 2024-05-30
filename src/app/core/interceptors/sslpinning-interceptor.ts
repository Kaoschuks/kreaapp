import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor, HttpErrorResponse } from '@angular/common/http';
import { catchError } from 'rxjs/operators';


@Injectable({
    providedIn: 'root'
  })
  export class CertificateValidationService {
    private http: HttpClient = inject(HttpClient)
  
    // URL of the CT log to query for the certificate
    private ctLogUrl = 'https://ct.googleapis.com/pilot/ct/v1/get-entries';
  
  
    // Function to validate the server certificate
    validateCertificate(url: string): Observable<boolean> {
      // Make an HTTP request to the CT log to check for the certificate
      return this.http.get<any>(`${this.ctLogUrl}?start=0&end=1&filter=certificate_subject:${url}`)
        .pipe(
        //   .map((response: any) => {
        //     // If the certificate is found in the CT log, return true (valid)
        //     // Otherwise, return false (invalid)
        //     return response && response.entries && response.entries.length > 0;
        //   })
            catchError((error: any) => {
            console.error('Error validating certificate:', error);
            // Return false in case of error
            return of(false);
          })
        );
    }
}

@Injectable()
export class SSLPinningInterceptor extends CertificateValidationService implements HttpInterceptor {

  // Server certificate or its hash
  serverCertificate = '...';

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // Clone the request to avoid modifying the original request
    const clonedRequest = request.clone();

    // Validate the server certificate
    if (!this.validateCertificate(clonedRequest.url)) {
      return throwError('SSL pinning validation failed');
    }

    // Pass the request through the interceptor chain
    return next.handle(clonedRequest).pipe(
      catchError((error: HttpErrorResponse) => {
        return throwError(error);
      })
    );
  }
}


