import { Component, ElementRef, OnInit, ViewChild, Renderer2 } from '@angular/core';
import { GlobalsServices } from 'src/app/services/core/globals';

@Component({
  selector: 'role',
  templateUrl: './role.component.html',
  styleUrls: ['./role.component.scss'],
})
export class RoleComponent implements OnInit {

  @ViewChild('checkboxIcon') checkboxIcon: ElementRef;
  @ViewChild('roleCard') roleCard: ElementRef;

  constructor(
    private _globals: GlobalsServices,
    private renderer:Renderer2
  ) { }

  ngOnInit() {}

  ngAfterViewInit() {
    //this.select();
  }

  selectbox(event: any) {
    this.renderer.addClass(event.target,"active");
    this.checkboxIcon.nativeElement.style.display = 'block';
    this.renderer.addClass(this.roleCard.nativeElement, "selected");
  }

  closeModal() {
    this._globals.modalCtrl.dismiss();
  }

  async selectedrole(country: string) {
    this.closeModal();
    this._globals.navigate('/signup', false)
  }

}
