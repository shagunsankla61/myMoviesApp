import { Injectable }    from '@angular/core';
import { Headers, Http,Response } from '@angular/http';

import 'rxjs/add/operator/map';


@Injectable()
export class RegisterService{
  private url: string="http://localhost:3008/"
  constructor(private http:Http){}

   register(reg:any){
    return this.http
    .post(this.url+"userdetail",reg)
    .subscribe(ref=>{console.log("Data from register",ref);});
  }

  
}
