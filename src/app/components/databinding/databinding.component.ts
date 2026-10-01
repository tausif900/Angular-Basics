import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-databinding',
  imports: [FormsModule],
  templateUrl: './databinding.component.html',
  styleUrl: './databinding.component.css',
})
export class DatabindingComponent {
  name = 'Tausif';
  age = 22;
  color = 'black';

  onButtonClick() {
    alert('button Clicked');
  }

  changeColor(color: string) {
    this.color = color;
  }
}
