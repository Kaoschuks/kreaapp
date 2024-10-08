import { CUSTOM_ELEMENTS_SCHEMA, ChangeDetectionStrategy, Component, EventEmitter, Input, Output, inject } from '@angular/core';
import { Platform } from '@ionic/angular';
import { IonButton, IonCol, IonContent, IonItem, IonLabel, IonModal, IonRow, IonSelect, IonSelectOption, IonTitle, IonToolbar } from '@ionic/angular/standalone';
import { GlobalsServices } from 'src/app/core';
import { HalfModalComponent } from 'src/app/shared/components/modal_components';

@Component({
  selector: 'app-filter-modal',
  templateUrl: './filter-modal.component.html',
  styleUrls: ['./filter-modal.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [
    HalfModalComponent, IonRow, IonToolbar, IonContent, IonTitle, IonRow, IonCol, IonItem, IonSelect, IonLabel, IonSelectOption, IonButton, IonModal
  ]
})
export class FilterModalComponent {
  plt: Platform = inject(Platform);
  @Input() month!: number;
  @Input() months: Array<any> = [];
  @Input() year!: number;
  @Input() years: Array<any> = [];
  @Input() type!: string;
  @Input() isOpen: boolean = false;
  @Output() apply = new EventEmitter<any>();

  public readonly globals: GlobalsServices = inject(GlobalsServices);

  applyFilter() {
    this.apply.emit({
      month: this.month,
      year: this.year
    })
    this.globals.closeModal(`${this.type}filtermodal`)
  }
}
