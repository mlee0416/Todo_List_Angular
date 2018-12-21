import { Component,trigger,animate,style,transition,keyframes } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']

})
export class AppComponent {
  title = 'todo';
  todoArray = [];

  addTodo(value){
    this.todoArray.push(value)
    console.log(this.todos)
  }

  /*delete item*/
  deleteItem(){
   console.log("delete item")
  }

  deleteItem(todo){
    for(let i=0 ;i<= this.todoArray.length ;i++){
     if(todo== this.todoArray[i]){
      this.todoArray.splice(i,1)
     }
    }
   }

}


