import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login.component';
import { SignupComponent } from './auth/signup.component';
import { HomeComponent } from './home.component';
import { AuthGuard } from './shared/auth.guard';
import { CreateTaskComponent } from './tasks/create-task.component';
import { TasksContainerComponent } from './tasks/tasks-container.component';

const routes: Routes = [
  { path: '', component: HomeComponent, canActivate: [AuthGuard] },
  { path: 'login', component: LoginComponent },
  { path: 'sign-up', component: SignupComponent },
  { path: 'tasks', component: TasksContainerComponent, canActivate: [AuthGuard] },
  { path: 'create', component: CreateTaskComponent, canActivate: [AuthGuard] },
  { path: '**', redirectTo: '' }
];

export const appRoutingModule = RouterModule.forRoot(routes);
