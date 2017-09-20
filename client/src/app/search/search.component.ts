import { Component,EventEmitter,Input,Output, OnInit } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { NgModule } from '@angular/core';
import {Http,Response} from '@angular/http';
import {MainService} from '../service/main.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit{
	@Output() onVoted=new EventEmitter<any>();
 
  constructor(private mainservice:MainService){}
   title = 'Movie';
  movie="";
  ref="";
  movieSearch(): void{
  	
 this.mainservice.getmovies(this.movie)
 .subscribe(ref=>{
 	console.log(ref);
 	this.ref=ref;
 });
 this.onVoted.emit(this.ref);
   }
  
   ngOnInit(): void{
   }
}
