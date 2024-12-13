import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { EmployeeListComponent } from './component/employee-list/employee-list.component';
import { AddEmployeesComponent } from "./component/add-employees/add-employees.component";
import { DataBindingComponent } from './component/data-binding/data-binding.component';

@Component({
  selector: 'app-root',
  // imports: [RouterOutlet, EmployeeListComponent, AddEmployeesComponent],
  imports: [RouterOutlet, DataBindingComponent],

  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'my-angular-app';
}
