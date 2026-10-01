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

  students = [
    {
      id: 1,
      name: 'Rahul',
      age: 20,
      course: 'Computer Science',
      city: 'Mumbai',
      marks: 85,
    },
      {
      id: 2,
      name: 'Asif',
      age: 20,
      course: 'Computer Science',
      city: 'Mumbai',
      marks: 80,
    },
      {
      id: 3,
      name: 'Saif',
      age: 20,
      course: 'MVC',
      city: 'Mumbai',
      marks: 65,
    },
      {
      id: 4,
      name: 'Khadija',
      age: 20,
      course: 'IT',
      city: 'Mumbai',
      marks: 70,
    },
     {
      id: 5,
      name: 'Aarman',
      age: 20,
      course: 'IT',
      city: 'Mumbai',
      marks: 55,
    },
  ];

  toggleLogin() {
    this.loggedIn = !this.loggedIn;
  }
}
