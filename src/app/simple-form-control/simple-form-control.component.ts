import { FormControl } from '@angular/forms';
import { Component } from '@angular/core';

@Component({
  selector: 'app-simple-form-control',
  templateUrl: './simple-form-control.component.html'
})
export class SimpleFormControlComponent {
  txtName = new FormControl('');
}
