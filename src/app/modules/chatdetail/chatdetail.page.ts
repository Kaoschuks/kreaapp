import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonBackButton, IonButton, IonButtons, IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';

@Component({
  selector: 'app-chatdetail',
  templateUrl: './chatdetail.page.html',
  styleUrls: ['./chatdetail.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonBackButton, IonButtons, IonButton, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class ChatdetailPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
