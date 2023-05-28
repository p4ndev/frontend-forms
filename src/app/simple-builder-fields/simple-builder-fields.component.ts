import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-simple-builder-fields',
  templateUrl: './simple-builder-fields.component.html',
  styles: [
  ]
})
export class SimpleBuilderFieldsComponent {

  signInForm = this.fb.group({
    userName : ['', Validators.required],
    passWord: ['', Validators.required]
  });

  constructor(private readonly fb : FormBuilder) {
    console.warn(this.signInForm);        
  }

}
