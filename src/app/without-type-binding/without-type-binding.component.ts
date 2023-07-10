import { Component } from '@angular/core';
import { TemplateDriveFormService } from '../business/template-drive-form.service';

@Component({
  selector: 'app-without-type-binding',
  templateUrl: './without-type-binding.component.html'
})
export class WithoutTypeBindingComponent {

  title = 'Without any type of binding';

  constructor(public services : TemplateDriveFormService){}

}