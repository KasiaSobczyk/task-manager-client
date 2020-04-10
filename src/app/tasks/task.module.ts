import { TasksComponent } from './tasks.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateTaskComponent } from './create-task.component';
import { SharedModule } from '@app/shared/shared.module';
import { TaskListComponent } from './task-list/task-list.component';


@NgModule({
  declarations: [TasksComponent, CreateTaskComponent, TaskListComponent],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class TaskModule { }
