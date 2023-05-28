import { IEventForm } from "./form-field-event-behaviors.interface";
import { FormControlStatus } from "@angular/forms";

export abstract class FormFieldEventBehaviors{

  onFormStatusChanged(e : FormControlStatus) {
    console.warn("Form status changed:");
    console.log(e);    
  }

  onFormValueChanged(e : Partial<IEventForm>) {
    console.warn("Form values changed:");
    console.log(e);    
  }

  onNameStatusChanged(e : FormControlStatus) {
    console.warn("Name status changed");
    console.log(e);    
  }

  onNameValueChanged(e: string | null) {
    console.warn("Name value changed:");
    console.log(e);    
  }
  
}