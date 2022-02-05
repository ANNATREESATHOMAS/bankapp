import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';



@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent implements OnInit {
  @Input() item:string|undefined
  @Output() onDelete = new EventEmitter()
  @Output() onCancel = new EventEmitter()
  constructor() { }

  ngOnInit(): void {
  }
deleteFromChild(){
  this.onDelete.emit(this.item)
}
cancelFromChild(){
   this.onCancel.emit("")
}
}
