import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-searchstudent',
  templateUrl: './searchstudent.component.html',
  styleUrls: ['./searchstudent.component.css']
})
export class SearchstudentComponent implements OnInit {

  constructor(private myapi:ApiService) { }



inputValue=""


  readValues=()=>{
    let data={
      "name":this.inputValue,
      "dob":this.inputValue
    }

    console.log(data)
    this.myapi.searchStudent(data).subscribe(
      (resp)=>{
       this.dataD=resp
  console.log(resp)
     
      }
    )
  }

dataD:any=[]

  ngOnInit(): void {
  }
  
}