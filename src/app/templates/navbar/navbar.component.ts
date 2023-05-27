import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  @Output() toggle = new EventEmitter<boolean>();
  sidebarstatus:boolean=false;
  toogleSideBar() {
    this.sidebarstatus = !this.sidebarstatus;
    this.toggle.emit(this.sidebarstatus);
  }
}