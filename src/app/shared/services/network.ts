import { Injectable, inject } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
// import { OfflineManagerService } from './offline';
import { GlobalsServices } from './globals';
import { Network } from '@capacitor/network';
import { ConnectionStatus } from 'src/app/core';


@Injectable({
  providedIn: 'root'
})
export class NetworkProvider {
   
  private globals: GlobalsServices = inject(GlobalsServices);
  // private offlineManager: OfflineManagerService = inject(OfflineManagerService);

  status: BehaviorSubject<ConnectionStatus> | any= new BehaviorSubject(ConnectionStatus.Offline);
  internet: boolean = false;
 
  private async updateNetworkStatus(status: ConnectionStatus) {
    this.status.next(status);
    let connection = status == ConnectionStatus.Offline ? 'Offline' : 'Online';
    this.globals.toastAlert(
      (this.internet) ? 'You are currently offline. please connect to a network to enjoy our full features' : 'Connectivity found'
    )
    // if (window.navigator.connection.effectiveType != '4g') {
    //   console.log('slow connection!');
    //   // show modal dialog warning user that video will be loaded at lower resolution
    // }
  }
 
  public onNetworkChange(): Observable<ConnectionStatus> {
    return this.status.asObservable();
  }
 
  public getCurrentNetworkStatus(): ConnectionStatus {
    return this.status.getValue();
  }

  public checkNetwork() {
    Network.addListener('networkStatusChange', async (status: any) => {
      let netstatus: any = await Network.getStatus();
      (netstatus.connected === false)
        ? this.updateNetworkStatus(ConnectionStatus.Offline)
        : this.updateNetworkStatus(ConnectionStatus.Online);
      // if(netstatus.connected === false) this.offlineManager.checkForEvents().subscribe();
      this.internet = netstatus.connected;
    });
  }
}