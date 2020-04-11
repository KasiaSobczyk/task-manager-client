import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppComponent } from './app.component';
import { appRoutingModule } from './app.routing';
import { TokenInterceptorService } from './shared/token-interceptor';
import { HomeComponent } from './home.component';
import { declarations } from './core/components';
import { AuthModule } from './auth/auth.module';
import { TaskModule } from './tasks/task.module';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    declarations
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    appRoutingModule,
    AuthModule,
    TaskModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: TokenInterceptorService, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
