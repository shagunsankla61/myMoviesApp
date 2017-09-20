import { Injectable } from '@angular/core';
import {Http,Response,Headers} from '@angular/http';
import 'rxjs/add/operator/map';



@Injectable()
export class ExpressService {
	private url:string="http://localhost:3008/"

  constructor(private http:Http) { }
  getConnection(){
  	return this.http.get(this.url);
  }
addFavMovie(fav:any){
	console.log("service");
	return this.http
	.post(this.url+"insert",fav)
	.subscribe(data=>{console.log("data from post",data);});
}
}
