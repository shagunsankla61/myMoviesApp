import { Injectable }    from '@angular/core';
import { Headers, Http,Response } from '@angular/http';

import 'rxjs/add/operator/map';


@Injectable()
export class FavouriteService{
  private url: string="http://localhost:3008/"
  
  constructor(private http:Http){ }

  deletefavNews(fav:any){

    return this.http
    .delete(this.url+"delete/"+fav._id)
    .subscribe(res=>{console.log("data from post" , res );});
  }
updateFav(movie:any){
  return this.http.put(this.url+"update/"+movie._id,movie,
    {headers:new Headers({'Content-type':'application/json'})
  }).subscribe();
}
}