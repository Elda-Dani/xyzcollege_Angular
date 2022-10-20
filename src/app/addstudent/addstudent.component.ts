import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-addstudent',
  templateUrl: './addstudent.component.html',
  styleUrls: ['./addstudent.component.css']
})
export class AddstudentComponent implements OnInit {

  constructor(private myapi:ApiService) { }

name=""
roll=""
admission=""
college=""
department=""
bloodgroup=""
dob=""
parentname=""
parentemail=""
guardianname=""
guardianaddress=""

status:boolean=false

readValue=()=>{
  let data={
    "name":this.name,
"roll":this.roll,
"admission":this.admission,
"college":this.college,
"department":this.department,
"bloodgroup":this.bloodgroup,
"dob":this.dob,
"parentname":this.parentname,
"parentemail":this.parentemail,
"guardianname":this.guardianname,
"guardianaddress":this.guardianaddress
  }
  console.log(data)
this.myapi.addStudent(data).subscribe(
  (respose)=>{
    console.log(respose)
    alert ("successfully added")
    this.name=""
    this.roll=""
    this.admission=""
    this.college=""
    this.department=""
    this.bloodgroup=""
    this.dob=""
    this.parentname=""
    this.parentemail=""
    this.guardianname=""
    this.guardianaddress=""
    this.status=true
  }
)

 
}

  ngOnInit(): void {
  }

}
