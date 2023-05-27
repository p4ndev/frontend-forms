import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-grouped-form-fields-event',
  templateUrl: './grouped-form-fields-event.component.html'
})
export class GroupedFormFieldsEventComponent {

  groupEventForm = new FormGroup({
    name: new FormControl(),
    email: new FormControl()
  });

  get Email() : FormControl<string>{
    return this.groupEventForm.controls.email;
  }

  get Name() : FormControl<string>{
    return this.groupEventForm.controls.name;
  }

  onEmailSent():void{
    console.log(this.Name.value);
    console.log(this.Email.value);
    
    console.log('---------------');

    console.log(this.groupEventForm.get('name')?.value);
    console.log(this.groupEventForm.get('email')?.value);
    
    this.groupEventForm.reset();
  }

}
