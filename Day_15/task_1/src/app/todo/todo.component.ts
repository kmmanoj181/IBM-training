import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  
  constructor() { }

  ngOnInit(): void {
  }
  inputTask:string="";
  public taskList:string[]=[];
  addTask(){
    console.log(this.inputTask);
    if(this.inputTask==""){

    }
    else{
      this.taskList.push(this.inputTask);
      this.inputTask="";
    }
    
  console.log(this.taskList);
  }

  delTask(index:any){
    this.taskList.splice(index,1);
  }
  
  
}
