import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {FormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { SearchComponent } from './search/search.component';
import { SearchListComponent } from './search-list/search-list.component';
import { SearchDetailComponent } from './search-detail/search-detail.component';
import {MainService} from './service/main.service';
import {HttpModule} from '@angular/http';
//import { ShowFavComponent } from './show-fav/show-fav.component';
import {NgxPaginationModule} from 'ngx-pagination';
import {ExpressService}from './service/express.service';
import { FavouriteComponent } from './favourite/favourite.component';
import { FavouritelistComponent } from './favouritelist/favouritelist.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
//import { UpdateComponent } from './update/update.component';
import { RouterModule, Routes } from '@angular/router';
const appRoutes: Routes = [
{ path: 'favourite', component: FavouritelistComponent },
{path: 'search' , component: SearchDetailComponent},
{path: 'Register', component:SignupComponent},
{path: 'Login', component:LoginComponent},



]

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    SearchListComponent,
    SearchDetailComponent,
    FavouriteComponent,
    FavouritelistComponent,
    LoginComponent,
    SignupComponent
       
    
  ],
  imports: [
    BrowserModule,FormsModule,HttpModule,NgxPaginationModule,
        RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  providers: [MainService,ExpressService],
  bootstrap: [AppComponent]
})
export class AppModule { }
