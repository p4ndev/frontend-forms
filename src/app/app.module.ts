import { BrowserModule                        } from '@angular/platform-browser';
import { AppComponent                         } from './app.component';
import { ReactiveFormsModule                  } from '@angular/forms';
import { NgModule                             } from '@angular/core';

import { ValidationComponent                  } from './validation/validation.component';
import { ValidationReportComponent            } from './validation-report/validation-report.component';
import { SimpleFormControlComponent           } from './simple-form-control/simple-form-control.component';
import { SimpleArrayFieldsComponent           } from './simple-array-fields/simple-array-fields.component';
import { GroupedFormFieldsComponent           } from './grouped-form-fields/grouped-form-fields.component';
import { SimpleBuilderFieldsComponent         } from './simple-builder-fields/simple-builder-fields.component';
import { SingleFormManipulationComponent      } from './single-form-manipulation/single-form-manipulation.component';
import { GroupedFormFieldsEventComponent      } from './grouped-form-fields-event/grouped-form-fields-event.component';
import { MultipleFormManipulationComponent    } from './multiple-form-manipulation/multiple-form-manipulation.component';

@NgModule({
  declarations: [
    AppComponent,                             SimpleFormControlComponent,
    GroupedFormFieldsComponent,               GroupedFormFieldsEventComponent,
    SingleFormManipulationComponent,          MultipleFormManipulationComponent,
    ValidationComponent,                      ValidationReportComponent,
    SimpleBuilderFieldsComponent,             SimpleArrayFieldsComponent
  ],
  imports: [
    BrowserModule,                            ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
