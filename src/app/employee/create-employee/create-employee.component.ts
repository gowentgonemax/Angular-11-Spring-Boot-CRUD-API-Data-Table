import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Router} from '@angular/router';

import { EmployeeService } from 'src/app/service/employee.service';
import {Employee} from '../../model/employee.model'
@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit {
  submitted:boolean
  employee: Employee = new Employee
  constructor(private employeeService:EmployeeService,
              private router:Router) { }

  ngOnInit(): void {
  }

  onSubmit() {
    this.submitted = true;
   
  }

}
