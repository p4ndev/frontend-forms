import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-validation-report',
  templateUrl: './validation-report.component.html'
})
export class ValidationReportComponent {
  @Input() header : string = "";
}
