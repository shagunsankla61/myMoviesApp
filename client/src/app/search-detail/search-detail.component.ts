import { Component, OnInit,Input } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { NgModule } from '@angular/core';
import {ExpressService}from '../service/express.service';

@Component({
  selector: 'app-search-detail',
  templateUrl: './search-detail.component.html',
  styleUrls: ['./search-detail.component.css']
})
export class SearchDetailComponent implements OnInit {
@Input('search') search:any;
  constructor(private expressservice:ExpressService ){}



addcontent(obj:any){
	 //console.log("helloooo");
	this.expressservice.addFavMovie(obj);
console.log(obj);
	//console.log("ADDED TO FAV")
}
  ngOnInit() {
  }

}
