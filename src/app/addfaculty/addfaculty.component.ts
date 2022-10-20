import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-addfaculty',
  templateUrl: './addfaculty.component.html',
  styleUrls: ['./addfaculty.component.css']
})
export class AddfacultyComponent implements OnInit {

  constructor(private myapi:ApiService) { }


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
this.myapi.addFaculty(data).subscribe(
  (response)=>{
    console.log(response)
    alert ("successfully added")
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
)
   
  }
  

  ngOnInit(): void {
  }

}
