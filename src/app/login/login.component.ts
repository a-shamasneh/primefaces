import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router, ActivatedRoute } from '@angular/router';
import { AsyncLocalStorage } from 'angular-async-local-storage';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private Auth:AuthService,protected storage: AsyncLocalStorage) { }

  ngOnInit() {
  }
  message:string;
  username:string;
  password:string;

  login(){
    var user={
      username:this.username,
      password:this.password
    }
    this.Auth.signin(user).subscribe(ok=>{
      if(typeof(ok)!=="string"){

        this.storage.setItem('tracking.com', ok.token).subscribe(() => {
        console.log(this.storage.getItem('tracking.com'))
        });
        
        this.storage.setItem('IsAuth','true');
        //window.location.href=("/#profile")
        console.log(this.storage.getItem('IsAuth'))
      this.message=ok.id
      }
      else
      {
      this.message=ok;
      }
    }
      
    );

      
     
  }
}
