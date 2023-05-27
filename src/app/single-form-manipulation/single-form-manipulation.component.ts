import { SingleFormManipulationForm } from './single-form-manipulation.form';
import { Component } from '@angular/core';

@Component({
  selector: 'app-single-form-manipulation',
  templateUrl: './single-form-manipulation.component.html'
})
export class SingleFormManipulationComponent extends SingleFormManipulationForm {

  addName = () : void => this.name.setValue('Ana');
  addEmail = () : void => this.email.setValue('email@aol.com');
  addFemale = () : void => this.gender.setValue(2);
  toggleTerms = () : void => this.optIn.setValue(!this.optIn.value);

}