import { Component, ElementRef, ViewChild } from '@angular/core';

export interface RegisterFormDto{
  username  : string | undefined,
  password  : string | undefined,
  phone     : string | undefined,
}

@Component({
  selector: 'app-root',
  styleUrls: ['./app.component.sass'],
  templateUrl: './app.component.html'
})
export class AppComponent {

  formDto? : RegisterFormDto;

  @ViewChild('usr', { static: false }) txtUsername?     : ElementRef<HTMLInputElement>;
  @ViewChild('pwd', { static: false }) txtPassword?     : ElementRef<HTMLInputElement>;
  @ViewChild('tel', { static: false }) txtPhoneNumber?  : ElementRef<HTMLInputElement>;

  onSubmitForm(){
    this.formDto = {
      username  : this.txtUsername?.nativeElement.value,
      password  : this.txtPassword?.nativeElement.value,
      phone     : this.txtPhoneNumber?.nativeElement.value
    }
  }
}
