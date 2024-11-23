import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToDoService } from '../to-do.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.scss'
})
export class TodoComponent implements OnInit {

  taskForm : FormGroup;

  tasks : any[] = [];

  constructor(private fb : FormBuilder, private todoService : ToDoService){
    this.taskForm = this.fb.group({
      'id': [''],
      'taskName' : ['',[Validators.required]]
    })
  }

  ngOnInit(): void {

    this.getAllTasks();

  }

  getAllTasks()
  {
    this.todoService.getAllTasks().subscribe(res => {
      this.tasks = res.result;
    },err => {
      console.log(err);
    });
  }

  addTask()
  {
    let param = {TaskName:'',DueDate:null,TaskPriority:0};
    param.TaskName = this.taskForm.get('taskName')?.value;

    this.todoService.createTask(param).subscribe(res => {
      console.log(res);
      this.taskForm.reset();
      console.log(this.tasks);

      this.getAllTasks(); //refresh tasks list
    },err => {
      console.log(err);
    });


  }

  deleteTask(taskId : number)
  {
    let param = {taskId : -1}
    param.taskId = taskId;

    this.todoService.deleteTask(param).subscribe(res => {
      console.log(res);
      console.log('successfully deleted');
      this.getAllTasks(); //refresh tasks list
    }, err => {
      console.log(err);
    });
  }

  getBackgroundColor(index: number): string {
    const colors = [ '#d1c4e9','#ffddf4','#fffdd0','#e0f7fa']; 
    return colors[index % colors.length];
  }

}
