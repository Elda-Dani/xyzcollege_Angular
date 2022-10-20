import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-viewallstudents',
  templateUrl: './viewallstudents.component.html',
  styleUrls: ['./viewallstudents.component.css']
})
export class ViewallstudentsComponent implements OnInit {

  constructor(private myapi:ApiService) {
    this.fetchData()
   }
  
fetchData=()=>{
  this.myapi.viewStudent().subscribe(
    (data)=>{
      this.studentData=data
    }
  )
}

deleteStudents=(id:any)=>{
  let data={
    "id":id
  }
  this.myapi.deleteStudent(data).subscribe(
    (response)=>{
      alert ("Deleted")
    }
  )
  this.fetchData()
}

  studentData:any=[
    
  ]



  ngOnInit(): void {
  }

}
