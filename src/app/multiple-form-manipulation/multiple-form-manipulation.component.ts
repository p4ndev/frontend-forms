import { MultipleFormManipulationForm } from './multiple-form-manipulation.form';
import { ESubject } from '../shared/subject.enum';
import { Component } from '@angular/core';

@Component({
  selector: 'app-multiple-form-manipulation',
  templateUrl: './multiple-form-manipulation.component.html'
})
export class MultipleFormManipulationComponent extends MultipleFormManipulationForm {

  subjectEnums = ESubject;
  userEmail? : string;

  addIssue = () : void => {
    this.form.patchValue({
      subject: ESubject.Issue,
      content: 'Lorem ipsum dolor - issue template.'
    });
  }

  addSuggestion = () : void => {
    this.form.patchValue({
      name: 'Ana',
      subject: ESubject.Suggestion,
      content: 'Lorem ipsum dolor - suggestion template.'
    });
  }

  parseContent = () : void => {

    if(this.subject.value === "") return;

    let body! : string, destination! : string;
    const prefix = `My name is ${this.name.value},\n\n`;
    const suffix = `\n\nSincerely,\n${this.email.value}`;
    
    switch(this.subject.value){
      case ESubject.Issue:
        body = `I've been faced a hard time using the tool.`;
        destination = "issue@company.com";
        break;
      case ESubject.Support:
        body = `I need help during the first part.`;
        destination = "support@company.com";
        break;
      case ESubject.Suggestion:
        body = `I would like to have a quickest way to find what I left.`;
        destination = "quality@company.com";
        break;
    }
    
    this.form.patchValue({
      content: prefix + body + suffix,
      to: destination
    });

  }

}
