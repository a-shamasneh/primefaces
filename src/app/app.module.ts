import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import {DataTableModule,SharedModule} from 'primeng/primeng';
import {ButtonModule} from 'primeng/primeng';
import { LoginComponent } from './login/login.component';
import { AuthService } from './auth.service';
import { RouterModule } from '@angular/router';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { HttpModule } from '@angular/http';
import { AsyncLocalStorageModule } from 'angular-async-local-storage';
import { FormsModule } from '@angular/forms';
const ROUTES = [
  {
    path: '',
    component:LoginComponent
  },
  

];
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
	BrowserAnimationsModule,
	DataTableModule,
	SharedModule,
  ButtonModule,
  HttpModule,
  AsyncLocalStorageModule,
  RouterModule.forRoot(ROUTES),
  FormsModule


	
  ],
  providers: [AuthService,{ provide: LocationStrategy, useClass: HashLocationStrategy }],
  bootstrap: [AppComponent]
})
export class AppModule { }
