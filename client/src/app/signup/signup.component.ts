import { Component, OnInit } from '@angular/core';
import {RegisterService} from './signup.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
  providers:[RegisterService]
})
export class SignupComponent implements OnInit {

  constructor(private registerservice:RegisterService) {  }
data={};
addInfo(obj:any){
 	this.registerservice.register(obj);
 }
  ngOnInit() {
  }

}