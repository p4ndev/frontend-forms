import { TemplateDriveFormModel } from '../business/template-drive-form.model';
import { TemplateDriveFormService } from '../business/template-drive-form.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-with-one-way-binding',
  templateUrl: './with-one-way-binding.component.html'
})
export class WithOneWayBindingComponent {
  
  title = 'With one-way data binding';

  constructor(public services : TemplateDriveFormService){}

  get model() : TemplateDriveFormModel{
    return this.services.innerModel;
  }

}
