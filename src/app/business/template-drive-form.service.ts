import { TemplateDriveFormModel } from './template-drive-form.model';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TemplateDriveFormService {

  innerModel : TemplateDriveFormModel;

  constructor() {
    this.innerModel = {
      userId    : 0,
      firstName : '',
      email     : '',
      password  : ''
    };
  }

  onInnerSubmit(){
    console.log(this.innerModel);
  }

  onOuterSubmit(outerModel : TemplateDriveFormModel){
    console.log(outerModel);
  }

}
