import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-simple-form-control',
  templateUrl: './simple-form-control.component.html'
})
export class SimpleFormControlComponent {
  txtName = new FormControl('');
}
