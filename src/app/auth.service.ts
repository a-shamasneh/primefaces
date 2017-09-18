import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';
@Injectable()
export class AuthService {

  constructor(private http:Http) { }

  signin(data){
    console.log(data);
    return this.http.post('/api/login',data).map(resp=>{return resp.json()})
      }
}
