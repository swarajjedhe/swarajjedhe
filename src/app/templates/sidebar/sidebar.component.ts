import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {

  // sideBarVissible=true;
  // // width:any=5;

  // toogleSidebar(){
  //   this.sideBarVissible=!this.sideBarVissible
  //   // this.width;

  // }
  @Input() sideStatus:boolean=false;
}
