import { FormBuilder, Validators } from '@angular/forms';
import { Component } from '@angular/core';

@Component({
  selector: 'app-simple-builder-fields',
  templateUrl: './simple-builder-fields.component.html'
})
export class SimpleBuilderFieldsComponent {

  signInForm = this.fb.group({
    userName  : ['', Validators.required],
    passWord  : ['', Validators.required]
  });

  constructor(private readonly fb : FormBuilder) {
    console.warn(this.signInForm);        
  }

}
