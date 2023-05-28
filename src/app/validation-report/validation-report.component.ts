import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-validation-report',
  templateUrl: './validation-report.component.html',
  styles: [
  ]
})
export class ValidationReportComponent {
  @Input() header : string = "";
}
