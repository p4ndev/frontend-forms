import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-grouped-form-fields',
  templateUrl: './grouped-form-fields.component.html'
})
export class GroupedFormFieldsComponent implements OnInit {
    
  groupForm! : FormGroup;

  ngOnInit() : void {
    this.groupForm = new FormGroup({
      firstName: new FormControl(''),
      lastName: new FormControl('')
    });
  }

}
