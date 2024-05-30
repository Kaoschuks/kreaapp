import { Injectable, OnInit } from '@angular/core';

@Injectable()
export class WebWorkersProvider
{
    worker: any;
    constructor() {
    }

    sendRequestToWorker(type: string) {
        this.worker.postMessage(type)
    }

    receiveResponseFromWorker(callback: any) {
        this.worker.addEventListener('message', (e: any) => {
            callback(e);
        });
    }
}