import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.css']
})
export class TransactionComponent implements OnInit {
  
transactions:any

  constructor(private ds:DataService) {
   this.ds.getTransaction().subscribe((result:any)=>{
     this.transactions=result.transaction
   },
   (result)=>{
     alert(result.error.message)
     
   }
   )
   }

  ngOnInit(): void {
  }

}
