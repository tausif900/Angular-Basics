import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ɵEmptyOutletComponent } from '@angular/router';

@Component({
  selector: 'app-directives',
  imports: [CommonModule],
  templateUrl: './directives.component.html',
  styleUrl: './directives.component.css',
})
export class DirectivesComponent {
  loggedIn = false;

  names = [
    'Tausif',
    'Saif',
    'Khadija',
    'Aasif',
    'Aakash',
    'Manthan',
    'bhishal',
  ];

  toggleLogin() {
    this.loggedIn = !this.loggedIn;
  }
}
