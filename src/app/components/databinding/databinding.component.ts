import { Component } from '@angular/core';

@Component({
  selector: 'app-databinding',
  imports: [],
  templateUrl: './databinding.component.html',
  styleUrl: './databinding.component.css',
})
export class DatabindingComponent {
  name = 'Tausif';
  age = 22;
  color = 'red';

  onButtonClick() {
    alert('button Clicked');
  }
}
