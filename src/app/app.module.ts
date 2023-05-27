import { NgModule                             } from '@angular/core';
import { ReactiveFormsModule                  } from '@angular/forms';
import { BrowserModule                        } from '@angular/platform-browser';

import { AppComponent                         } from './app.component';
import { SimpleFormControlComponent           } from './simple-form-control/simple-form-control.component';
import { GroupedFormFieldsComponent           } from './grouped-form-fields/grouped-form-fields.component';
import { SingleFormManipulationComponent      } from './single-form-manipulation/single-form-manipulation.component';
import { GroupedFormFieldsEventComponent      } from './grouped-form-fields-event/grouped-form-fields-event.component';
import { MultipleFormManipulationComponent } from './multiple-form-manipulation/multiple-form-manipulation.component';

@NgModule({
  declarations: [
    AppComponent,                             SimpleFormControlComponent,
    GroupedFormFieldsComponent,               GroupedFormFieldsEventComponent,
    SingleFormManipulationComponent,
    MultipleFormManipulationComponent
  ],
  imports: [
    BrowserModule,                            ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
