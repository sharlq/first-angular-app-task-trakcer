import { Component, OnInit, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { Task } from 'src/app/task';
import { UiService } from 'src/app/services/ui.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.scss']
})
export class AddTaskComponent implements OnInit {
  
  text: string = "";
  day: string ="";
  reminder: boolean = false;
  showAddTask:boolean = false;
  subscription!:Subscription;
  @Output() onAddTask = new EventEmitter<Task>();

  constructor(private uiService:UiService) { 
    this.subscription = this.uiService.onToggle().subscribe((val)=>(this.showAddTask = val))
  }

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
