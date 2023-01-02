import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  dropdown: boolean = false;

  setDropDown() {
    this.dropdown = !this.dropdown;
  }

  handleChange() {
    this.dropdown = false;
  }
}
