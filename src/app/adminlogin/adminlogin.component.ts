import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-adminlogin',
  templateUrl: './adminlogin.component.html',
  styleUrls: ['./adminlogin.component.css']
})
export class AdminloginComponent implements OnInit {

  constructor(private myrouter:Router) { }

username=""
password=""


readValues=()=>{
  let data={
    "username":this.username,
"password":this.password
  }
console.log(data)
if (this.username=="admin" && this.password=="admin") {
  alert("Login Successfully")
this.myrouter.navigate(["/adds"])
} else {
  alert("Invalid Credentials")
}
}

  ngOnInit(): void {
  }

}
