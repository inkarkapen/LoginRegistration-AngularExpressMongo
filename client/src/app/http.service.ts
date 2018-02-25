import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
@Injectable()
export class HttpService {

  constructor(private _http: HttpClient) { }
  login(user, cb){
    console.log('service works!', user)
    this._http.post('/login', user).subscribe((res)=>{
      cb(res)
    })
  }
  checkSession(cb){
    console.log('in checkSession service')
    this._http.get('/checkSession').subscribe((res)=>{
      cb(res)
    })
  }
}
