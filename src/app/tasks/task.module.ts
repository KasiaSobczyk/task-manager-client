import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '@app/shared/shared.module';
import { TasksComponent } from './tasks.component';
import { CreateTaskComponent } from './create-task.component';
import { TaskListComponent } from './task-list.component';


@NgModule({
  declarations: [TasksComponent, CreateTaskComponent, TaskListComponent],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class TaskModule { }
