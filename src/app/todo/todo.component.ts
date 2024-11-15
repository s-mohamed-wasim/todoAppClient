import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.scss'
})
export class TodoComponent {

  taskForm : FormGroup;

  tasks : any[] = [];

  constructor(private fb : FormBuilder){
    this.taskForm = this.fb.group({
      'id': [''],
      'taskName' : ['',[Validators.required]]
    })
  }

  addTask()
  {
    this.tasks.push(this.taskForm.get('taskName')?.value);

    this.taskForm.reset();

    console.log(this.tasks);
  }

  deleteTask(i : number)
  {
    this.tasks.splice(i,1);
  }

  getBackgroundColor(index: number): string {
    const colors = [ '#d1c4e9','#ffddf4','#fffdd0','#e0f7fa']; 
    return colors[index % colors.length];
  }

  demoMethod()
  {
    
  }
}
