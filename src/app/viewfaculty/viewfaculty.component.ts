import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-viewfaculty',
  templateUrl: './viewfaculty.component.html',
  styleUrls: ['./viewfaculty.component.css']
})
export class ViewfacultyComponent implements OnInit {

  constructor() { }


facultyData:any=[
  {"name":"Jaison","department":"mechanical engineering","designation":"assistant professor","dob":"1985-11-01","education":"Mtech","address":"abc","mobile":"9875463218","datejoin":"2022-10-01"},
  {"name":"Mathew","department":"Computer Science","designation":"assistant professor","dob":"1988-12-21","education":"Mca","address":"xyz","mobile":"9875883218","datejoin":"2018-06-08"},
  {"name":"Mini","department":"Electrical engineering","designation":"assistant professor","dob":"1975-08-12","education":"Mtech","address":"qwert","mobile":"9425463218","datejoin":"2015-05-03"},
  {"name":"Archana","department":"Civil engineering","designation":"assistant professor","dob":"1995-09-24","education":"Msw","address":"pqrs","mobile":"7975463218","datejoin":"2022-01-31"},
  {"name":"Reji","department":"Mechanical engineering","designation":"assistant professor","dob":"1975-05-30","education":"MA","address":"abcds","mobile":"7975463789","datejoin":"2019-04-01"},
  {"name":"Theresa","department":"Computer Science","designation":"assistant professor","dob":"1993-03-18","education":"Mca","address":"asdff","mobile":"7977563218","datejoin":"2020-06-02"},

]

  ngOnInit(): void {
  }

}
