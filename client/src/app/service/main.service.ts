import {Injectable} from '@angular/core';
import {Headers, Http,Response} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class MainService {
  
  //movie="";
  constructor(private http:Http){}
  getmovies(movie:any){
    const API_KEY="?api_key=d59c5a0ac39d9208f838492bb7c805b6";
    const URL="https://api.themoviedb.org/3/";
    const SEARCH="search/movie";
    const QUERY="&query=";
if (movie=="") {
  window.alert("Please Enter The Data");
  
}

 return this.http.get(URL+SEARCH+API_KEY+QUERY+movie)
 .map((res:Response)=>res.json());
   
 
  }
}

