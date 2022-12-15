import { Component, ElementRef, OnInit, ViewChild, Renderer2 } from '@angular/core';
import { GlobalsServices } from 'src/app/services/core/globals';

@Component({
  selector: 'role',
  templateUrl: './role.component.html',
  styleUrls: ['./role.component.scss'],
})
export class RoleComponent implements OnInit {

  @ViewChild('checkboxIcon1') checkboxIcon1: ElementRef;
  @ViewChild('checkboxIcon2') checkboxIcon2: ElementRef;
  @ViewChild('roleCard1') roleCard1: ElementRef;
  @ViewChild('roleCard2') roleCard2: ElementRef;

  public role: [] = [];

  constructor(
    private _globals: GlobalsServices,
    private renderer:Renderer2
  ) { }

  ngOnInit() {}

  ngAfterViewInit() {
    //this.select();
  }

  selectbox(event: any, value: any) {
    if(this.role.length == 0){
      if (value == 1){
        this.renderer.addClass(event.target,"active");
        this.checkboxIcon1.nativeElement.style.display = 'block';
        this.renderer.addClass(this.roleCard1.nativeElement, "selected");
        this.role = value;
        
      }
      else if(value == 2) {
        this.renderer.addClass(event.target,"active");
        this.checkboxIcon2.nativeElement.style.display = 'block';
        this.renderer.addClass(this.roleCard2.nativeElement, "selected");
        this.role = value;
      }
    }
   
  }

  closeModal() {
    this._globals.modalCtrl.dismiss();
  }

  async selectedrole(country: string) {
    this.closeModal();
    console.log(this.role)
    this._globals.navigate('/signup', false)
  }

}
