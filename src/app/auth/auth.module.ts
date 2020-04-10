import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from '@app/shared/shared.module';
import { LoginComponent } from './login.component';
import { SignupComponent } from './signup.component';



@NgModule({
  declarations: [LoginComponent, SignupComponent],
  imports: [CommonModule, SharedModule]
})
export class AuthModule { }
