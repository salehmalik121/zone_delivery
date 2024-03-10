import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isAuthenticated: boolean = false;
  constructor (private http : HttpClient , private router: Router){}
  // Check if user is authenticated
  isAuthenticatedUser(email: string , password: String): Observable<any> {
    const data = {email , password}
    return this.http.post<any>('http://localhost:3000/user/login' , data);
  }

  isValidUser(id : string): any{

   this.http.post<any>('http://localhost:3000/user/authenticate' , {id}).subscribe(
    response=>{
      console.log(response)
      return true
    },
    error=>{
      console.log(error)
      this.router.navigateByUrl("notAllowed")
      return false
    }
   );

   

  }

}
