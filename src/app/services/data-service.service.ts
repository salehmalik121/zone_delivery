import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  createUser(data: any): Observable<any> {
    return this.http.post<any>('http://localhost:3000/user/create', data);
  }

  loadUserData():Observable<any> {
    const id = sessionStorage.getItem('signature');
    return this.http.get<any>(`http://localhost:3000/user/${id}`);
  }


  loadProductList() : Observable<any>{
    return this.http.get<any>(`http://localhost:3000/product/`);
  }


  loadProductDetails(id : any) : Observable<any>{
    return this.http.get<any>(`http://localhost:3000/product/${id}`);
  }

  sendOTP(email : String) : Observable<any>{
    return this.http.post<any>(`http://localhost:3000/user/generate-otp` , {email});
  }

  verifyOTP(email : String , OTP: String) : Observable<any>{
    return this.http.post<any>(`http://localhost:3000/user/verify-otp` , {email , otp: OTP});
  }

  changePassword(email : String , newPassword: String) : Observable<any>{
    return this.http.post<any>(`http://localhost:3000/user/change-password` , {email , newPassword});
  }


  loadProductById(id:String) : Observable<any>{
    return this.http.get<any>(`http://localhost:3000/product/getProductById/${id}`);
  }



  buyProduct(pid:String) : Observable<any>{
    const id = sessionStorage.getItem('signature');
    return this.http.get<any>(`http://localhost:3000/user/productBought/${pid}/${id}`);
  }

}
