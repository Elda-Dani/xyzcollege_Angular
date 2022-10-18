import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-viewallstudents',
  templateUrl: './viewallstudents.component.html',
  styleUrls: ['./viewallstudents.component.css']
})
export class ViewallstudentsComponent implements OnInit {

  constructor() { }
  


  studentData:any=[
    {"name":"Akamsha","roll":"06","admission":"2543","college":"santhigiri college","department":"civil engineering","bloodgroup":"O+ve","dob":"2000-11-28","parentname":"babu","parentemail":"babu@gmail.com","guardianname":"babu","guardianaddress":"xyx"},
    {"name":"Leena","roll":"05","admission":"2544","college":"newman college","department":"computer science","bloodgroup":"AB+ve","dob":"1999-12-12","parentname":"Xavier","parentemail":"xavier@gmail.com","guardianname":"Xavier","guardianaddress":"abc"},
    {"name":"Lara","roll":"04","admission":"2545","college":"nirmala college","department":"computer science","bloodgroup":"A+ve","dob":"2001-01-14","parentname":"Joy","parentemail":"joy@gmail.com","guardianname":"Joy","guardianaddress":"xyzc"},
    {"name":"Hari","roll":"07","admission":"2546","college":"uc college","department":"mechanical engineering","bloodgroup":"B+ve","dob":"1998-01-01","parentname":"Sankar","parentemail":"san12@gmail.com","guardianname":"Sankar","guardianaddress":"abcd"},
   
  ]



  ngOnInit(): void {
  }

}
