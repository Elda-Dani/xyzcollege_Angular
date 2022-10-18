import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-addfaculty',
  templateUrl: './addfaculty.component.html',
  styleUrls: ['./addfaculty.component.css']
})
export class AddfacultyComponent implements OnInit {

  constructor() { }


  name=""
  department=""
  designation=""
  dob=""
  education=""
  address=""
  mobile=""
  datejoin=""
  
  status:boolean=false
  
  readValue=()=>{
    let data={
      "name":this.name,
  "department":this.department,
  "designation":this.designation,
  "dob":this.dob,
  "education":this.education,
  "address":this.address,
  "mobile":this.mobile,
  "datejoin":this.datejoin
    }
    console.log(data)
    this.name=""
  this.department=""
  this.designation=""
  this.dob=""
  this.education=""
  this.address=""
  this.mobile=""
  this.datejoin=""
  this.status=true
  }
  

  ngOnInit(): void {
  }

}
