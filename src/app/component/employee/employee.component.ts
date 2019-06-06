import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
declare var $: any;
@Component({
  selector: "app-employee",
  templateUrl: "./employee.component.html",
  styleUrls: ["./employee.component.css"]
})
export class EmployeeComponent implements OnInit {
  categories = ["Angular", "Node", "React", "D3"];
  form: FormGroup;
  id:any;
  name:any;
  gender:any;
  category:any;
  Employees: any = [];
  view: any = [];
  isDisplay: boolean = true;
  editEmployee: any = [];
  headerName: string;
  buttonName: string;
  isAdd: boolean;
  isEdit: boolean;
  newItem: any = [];
  newview: any = [];
  multiview: any = [];
  

  constructor() {}
  
  ngOnInit() {
    this.createFormControls();
    this.createForm();
  }

  // Call the function when click on Add New Employee
  loadName() {
    console.log("add");
    this.isEdit = false;
    this.isAdd = true;
    this.form.reset();
    this.headerName = "Add Employee";
    this.buttonName = "Add";
  }

  createFormControls() {
    this.id = new FormControl("", Validators.required);
    this.name = new FormControl("", Validators.required);
    this.gender = new FormControl("", Validators.required);
    this.category = new FormControl("", Validators.required);
  }

  createForm() {
    this.form = new FormGroup({
      id: this.id,
      name: this.name,
      gender: this.gender,
      category: this.category
    });
  }

// reset a form 
  formNew() {
    this.form.reset();
  }

  
// function for view the each record
  viewEmp(emp) {
    for (let i = 0; i < this.Employees.length; i++) {
      console.log(this.Employees[i].id, "employee");

      console.log(this.Employees.length, "cccccccccc");
      if (this.Employees[i].id === emp.id) {
        this.view = this.Employees[i];
        this.newview = this.Employees;
        this.multiview = this.Employees[i];
        console.log(this.newview.length, "view");
        console.log(this.view, "viewxxxxxx");
      }
    }
    this.isDisplay = false;
  }


// function deleteEmp for deleteing particular record
  deleteEmp(emp) {
    for (let i = 0; i < this.Employees.length; i++) {
      console.log("employees", this.Employees[i].id);
      if (this.Employees[i].id === emp.id) {
        this.Employees.splice(i, 1);
        this.view=this.Employees
        console.log(this.Employees, "after");
      }
    }
  }



  /**function deleteEmp for delete the particular user record */
  // deleteEmp(emp, index) {
  //   try {
  //     this.Employees.forEach(element => {
  //       if (element.id === emp.id) {
  //         this.Employees.splice(index, 1);
  //       }
  //     });
  //   } catch (excep) {
  //     console.log(excep);
  //   }
  // }

  // view the edit record when click on edit button
   editEmp(emp) {
    this.form.reset();
    this.headerName = "Edit Employee";
    this.isEdit = true;
    this.isAdd = false;
    this.form.patchValue({
      id: emp.id,
      name: emp.name,
      gender: emp.gender,
      category: emp.category
    });
}


// Update the record click on Edit button
  updateName(emp) {
    emp = this.form.value;
    if (this.Employees > "0") {
      for (let i = 0; i < this.Employees.length; i++) {
        if (this.Employees[i].id === emp.id) {
          this.Employees[i].id = emp.id;
          this.Employees[i].name = emp.name;
          this.Employees[i].gender = emp.gender;
          this.Employees[i].category = emp.category;
          this.form.reset();
          $("#exampleModal").modal("toggle");
        }
      }
    } else {
      console.log("error handled");
    }
  }


// add the user record when click on submit button 
  onSubmit() {
    if (this.form.valid) {
      console.log("Form Submitted!");
      console.log(this.form.value);
      this.Employees.push(this.form.value);
      this.form.reset();
      $("#exampleModal").modal("toggle");
    }
  }
}
