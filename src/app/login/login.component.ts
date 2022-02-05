import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  aim = "Your Perfect Banking Partner"
  // accno="Enter your Account Number"
  acno = ""
  pswd = ""

  loginForm = this.fb.group({
    acno: ['', [Validators.required, Validators.pattern('[0-9]*')]],
    pswd: ['', [Validators.required, Validators.pattern('[a-zA-Z0-9]*')]],
  })

  constructor(private router: Router, private ds: DataService, private fb: FormBuilder) { }

  ngOnInit(): void {
  }

  login() {
    if (this.loginForm.valid) {
      var acno = this.loginForm.value.acno
      var password = this.loginForm.value.pswd
      this.ds.login(acno, password).subscribe((result:any)=>{
      // if (result) {
      //   alert("login success")
      //   this.router.navigateByUrl('dashboard')
      // }
        if (result) {
          alert(result.message)
          localStorage.setItem("currentAcno",JSON.stringify(result.currentAcno))
          localStorage.setItem("currentUserName",JSON.stringify(result.currentUserName))
          localStorage.setItem("token",JSON.stringify(result.token))
          this.router.navigateByUrl("dashboard")
        }
      },
      (result)=>{
        alert(result.error.message)
      }
      )
    }
    
    else {
      alert("invalid Form")
    }
  }
}

// login(a:any,p:any){
//   var acno=a.value
//   var password=p.value
//   let database=this.ds.users
// if(acno in database){
//   if (password==database[acno]["password"]){
//    alert("login success")
//    this.router.navigateByUrl('dashboard')
//   }
//   else{
//     alert("incorrect password")
//   }
// }
// else{
//   alert("invalid account number")
// }
//   alert("Login clicked")
// }
// }

