import { Component,OnInit } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { NgModule } from '@angular/core';
import {ExpressService}from './service/express.service';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
	constructor(private expressservice:ExpressService){}
  title = 'MOVIES';
  ref:any={};
  onVotedClicked(ref:any){
  	this.ref=ref;
  }
  testConnection(){
this.expressservice.getConnection();
console.log("connection succesfull****")
  }
ngOnInit():void
{
	this.testConnection();
}
}
