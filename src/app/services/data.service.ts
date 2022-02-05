import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ArgumentOutOfRangeError } from 'rxjs';
const options={
  headers:new HttpHeaders()
  }
@Injectable({
  providedIn: 'root'
})

export class DataService {

currentUserName:any
currentAcno:any

  users: any = {
    1000: { acno: 1000, uname: "Ramu", password: "1000", balance: 5000, transaction:[]},
    1001: { acno: 1001, uname: "Raju", password: "1001", balance: 5000, transaction:[]},
    1002: { acno: 1002, uname: "Ravi", password: "1002", balance: 5000, transaction:[]}
  }
  constructor(private http:HttpClient) {
    // this.getDetails()
   }
  

  // saveDetails(){
  //   if(this.users){
  //     localStorage.setItem("userDB",JSON.stringify(this.users))
  //   }
  //   if(this.currentUserName){
  //     localStorage.setItem("cUserName",JSON.stringify(this.currentUserName))
  //   }
  //   if(this.currentAcno)
  //   {
  //     localStorage.setItem("currentAcnoLocal",JSON.stringify(this.currentAcno))
  //   }
  // }
  // getDetails(){
  //   if(localStorage.getItem("userDB")){
  //     this.users=JSON.parse(localStorage.getItem("userDB") ||'')
  //   }
  //   if(localStorage.getItem("cUserName")){
  //     this.currentUserName=JSON.parse(localStorage.getItem("cUserName") ||'')
  //   }
  //   if(localStorage.getItem("currentAcnoLocal")){
  //     this.currentAcno=JSON.parse(localStorage.getItem("currentAcnoLocal")||'')
  //   }
  // }
  register(uname: any, acno: any, password: any) {
    // let db = this.users
    // if (acno in db) {
    //   return false
    // }
    // else {
    //   db[acno] = {
    //     uname,
    //     acno,
    //     password,
    //     balance: 0,
    //     transaction:[]
    //   }
    //   // console.log(db)
    //   this.saveDetails()
    //   return true
    // }
    const data={
      uname,
      acno,
      password
    }
   return this.http.post('http://localhost:3000/register',data)
  }
  login(acno: any, password: any) {

    // let database = this.users
    // if (acno in database) {
    //   if (password == database[acno]["password"]) {
    //     this.currentAcno=acno
    //     this.currentUserName=database[acno]["uname"]
    //     this.saveDetails()
    //     return true

    //   }
    //   else {
    //     alert("incorrect password")
    //     return false
    //   }
    // }
    // else {
    //   alert("invalid account number")
    //   return false
    // }
    const data={
      acno,
      password
    }
   return this.http.post('http://localhost:3000/login',data)
  }
  getTransaction()
  {
    
    return this.http.post('http://localhost:3000/getTransaction', "", this.getOptions())
  }
  deposit(acno: any, password: any, amt: any) {
    // let amount = parseInt(amt)
    // let db = this.users
    // if (acno in db) {
    //   if (password == db[acno]["password"]) {
    //     db[acno]["balance"] = db[acno]["balance"] + amount
    //     db[acno].transaction.push({
    //       amount:amount,
    //       type:"Credit"
    //     })
    //     // this.saveDetails()
    //     return db[acno]["balance"]
    //   }
    //   else {
    //     alert("incorrect Password")
    //     return false
    //   }
    // }
    // else {
    //   alert("account doesnot exist")
    //   return false
    // }
    const data={
      acno,
      password,
      amt
    }
   
   return this.http.post('http://localhost:3000/deposit',data,this.getOptions())
  }
  getOptions(){
    const token=JSON.parse (localStorage.getItem("token")||'')
    let headers=new HttpHeaders()
    if(token){
      headers=headers.append('x-access-token',token)
      options.headers=headers
    }
    return options
  }
  withdraw(acno: any, password: any, amt: any) {
  //   let amount = parseInt(amt)
  //   let db = this.users
  //   if (acno in db) {
  //     if (password == db[acno]["password"]) {
  //       if(db[acno]["balance"]>amount){
  //         db[acno]["balance"] = db[acno]["balance"] - amount
  //         db[acno].transaction.push({
  //           amount:amount,
  //           type:"Debit"
  //         })
  //         // this.saveDetails()
  //         return db[acno]["balance"]
  //       }
  //       else{
  //         alert("insufficient balance")
  //         return false
  //       }
  //     }
  //     else {
  //       alert("incorrect Password")
  //       return false
  //     }
  //   }
  //   else {
  //     alert("account doesnot exist")
  //     return false
  //   }

  const data={
    acno,
    password,
    amt
  }
 
 return this.http.post('http://localhost:3000/withdraw',data, this.getOptions())
}
delete(acno:any){
  
  return this.http.delete('http://localhost:3000/deleteAcc/'+acno,this.getOptions())

}
}
