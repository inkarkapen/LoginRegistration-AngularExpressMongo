import { Component, OnInit } from '@angular/core';
import { HttpService } from './../http.service'
import { HttpBackend } from '@angular/common/http/src/backend';
import { HttpSentEvent } from '@angular/common/http/src/response';
import { Router } from '@angular/router' 
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  user: object
  constructor(private _httpService: HttpService, private _router: Router) {
    this.user = {name: null}
  }

  ngOnInit() {
    this.checkSession()
  }
  checkSession(){
    this._httpService.checkSession((res)=>{
      if(!res){
        this._router.navigate(['/'])
      }
      this.user = res
    })
  }
  edit(id){
    console.log('in edit components')
  }
  delete(id){
    console.log('in delete components')
  }
}
