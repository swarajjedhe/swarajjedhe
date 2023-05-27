import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'mywebsite';

  // menuIcon = document.querySelector(".menu");
  // sidebar = document.querySelector(".side-bar");

  // toggleSidebar() {
  //   sidebar.classList.toggle("small-sidebar");

  // }

  sideStatus:boolean=false;
}
