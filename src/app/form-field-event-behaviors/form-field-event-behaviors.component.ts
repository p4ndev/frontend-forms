import { FormFieldEventBehaviors } from './form-field-event-behaviors.event';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form-field-event-behaviors',
  templateUrl: './form-field-event-behaviors.component.html'
})
export class FormFieldEventBehaviorsComponent extends FormFieldEventBehaviors implements OnInit {
  
  eventForm = new FormGroup({
    email : new FormControl(null, [Validators.required, Validators.email]),
    name  : new FormControl(null, [Validators.required, Validators.minLength(5)])
  });

  get form() : FormGroup{
    return this.eventForm;
  }

  get name() : FormControl<string | null>{
    return this.eventForm.controls.name;
  }

  ngOnInit() : void {
    this.form.statusChanges.subscribe(this.onFormStatusChanged);
    this.form.valueChanges.subscribe(this.onFormValueChanged);

    this.name.statusChanges.subscribe(this.onNameStatusChanged);
    this.name.valueChanges.subscribe(this.onNameValueChanged);
  }

}
