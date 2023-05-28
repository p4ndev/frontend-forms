import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormControl } from '@angular/forms';

@Component({
  selector: 'app-simple-array-fields',
  styleUrls: ['./simple-array-fields.component.sass'],
  templateUrl: './simple-array-fields.component.html'
})
export class SimpleArrayFieldsComponent {

  todoForm = this.fb.group({
    tasks: this.fb.array([
      this.newField
    ])
  });

  constructor(private readonly fb : FormBuilder) {}

  get tasks() : FormArray<FormControl<string | null>>{
    return this.todoForm.controls.tasks;
  }

  get newField() : FormControl<string | null>{
    return this.fb.control(null);
  }

  addTask() : void{
    this.tasks.push(this.newField);
  }

  removeTask() : void{
    const counter = this.tasks.length;
    if(counter <= 1) return;
    this.tasks.removeAt(counter - 1);
  }

}
