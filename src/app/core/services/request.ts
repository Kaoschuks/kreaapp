import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { url } from 'src/app/core';
import { lastValueFrom } from "rxjs";

@Injectable()
export class RequestService {
  url: string = url;

  constructor(private http: HttpClient) {}

  async get(routes: string, custom_url: boolean = false) {
    const url = custom_url ? routes : this.url + routes;
    return await lastValueFrom(this.http.get(url));
  }

  async post(routes: string, data: any, custom_url: boolean = false) {
    const url = custom_url ? routes : this.url + routes;
    return await new Promise((resolve, reject) => {
      this.http.post(url, data).subscribe(
        (response) => resolve(response),
        (error) => reject(error)
      );
    });
  }

  async update(routes: string, data: any, custom_url: boolean = false) {
    const url = custom_url ? routes : this.url + routes;
    return await new Promise((resolve, reject) => {
      this.http.put(url, data).subscribe(
        (response) => resolve(response),
        (error) => reject(error)
      );
    });
  }

  async delete(routes: string, data: any = {}, custom_url: boolean = false) {
    const url = custom_url ? routes : this.url + routes;
    return await new Promise((resolve, reject) => {
      this.http.delete(url, data).subscribe(
        (response) => resolve(response),
        (error) => reject(error)
      );
    });
  }
}
