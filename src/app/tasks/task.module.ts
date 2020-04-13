import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from '@app/shared/shared.module';
import { CreateTaskComponent } from './create-task.component';
import { TaskListsComponent } from './task-lists.component';
import { TasksContainerComponent } from './tasks-container.component';
import { SelectedListComponent } from './selected-list.component';



@NgModule({
  declarations: [TasksContainerComponent, CreateTaskComponent, TaskListsComponent, SelectedListComponent],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class TaskModule { }
