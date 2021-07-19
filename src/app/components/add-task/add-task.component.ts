import { Component, OnInit, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { Task } from 'src/app/task';
@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.scss']
})
export class AddTaskComponent implements OnInit {
  
  text: string = "";
  day: string ="";
  reminder: boolean = false;
  @Output() onAddTask = new EventEmitter<Task>();

  constructor() { }

  ngOnInit(): void {
  }

  onSubmitTask(){
    const newTask = {
      text:this.text,
      day:this.day,
      reminder:this.reminder
    }
    this.onAddTask.emit(newTask);

    this.text='';
    this.day='';
    this.reminder=false;
  }
}
