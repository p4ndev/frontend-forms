import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-validation',
  templateUrl: './validation.component.html'
})
export class ValidationComponent implements OnInit {
  
  form = new FormGroup({
    email : new FormControl(null, [ Validators.required, Validators.email ]),
    name  : new FormControl(null, [ Validators.required, Validators.minLength(5) ]),
    age   : new FormControl(null, [ Validators.required, Validators.min(18), Validators.max(100) ])
  });

  ngOnInit() : void {
    console.log(this.form);
  }

}
