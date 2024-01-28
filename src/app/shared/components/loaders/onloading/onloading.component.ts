import { NgClass } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { IonItem, IonLabel, IonSpinner } from '@ionic/angular/standalone';
import { LoadingComponent } from '../loading/loading.component';

@Component({
  selector: 'onloading',
  templateUrl: './onloading.component.html',
  styleUrls: ['./onloading.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [IonItem, IonSpinner, IonLabel, NgClass, LoadingComponent]
})
export class OnloadingComponent implements OnInit {

  @Input() useImage: boolean = true
  @Input() bgColor: string = 'bg-white'
  constructor() { }

  ngOnInit() {}

}
