import { Component, Input, OnInit } from '@angular/core';
import {NgModule} from '@angular/core';
import {FavouriteService} from './favourite.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-favourite',
  templateUrl: './favourite.component.html',
  styleUrls: ['./favourite.component.css'],
  
  providers: [FavouriteService]
})
export class FavouriteComponent implements OnInit {
@Input('data') data:any;

  constructor( private favouriteservice:FavouriteService,private router:Router){}
 
  deleteObject(del){
       this.favouriteservice.deletefavNews(del);
       alert("Deleted From Favourite List")
       this.router.navigateByUrl("/favourite");
    }
    updateData(movie,review){
      console.log(review);
      movie.commits= review;
      this.favouriteservice.updateFav(movie);
    }
ngOnInit() {
  }
}
