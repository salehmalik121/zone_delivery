import { Injectable } from '@angular/core';
import { ProductService } from './product.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductDataService {

  constructor(private socket: ProductService) { }

  addProduct(data:object){
    const id = sessionStorage.getItem('signature');
    
    this.socket.emit("AddProduct" , {...data , id})
  }


  deleteProduct(pid:string){
    const uid = sessionStorage.getItem('signature');
    this.socket.emit("DeleteProduct" , {pid , uid})
  }

  productAdded() : Observable<any>{
    return this.socket.fromEvent("NewProductAdded").pipe();
  }

  productDeleted() : Observable<any>{
    return this.socket.fromEvent("ProductDeleted").pipe();
  }

  updateProduct(data: any ){
    this.socket.emit("EditProduct" , data)
  }
  productUpdated() : Observable<any>{
    return this.socket.fromEvent("ProductUpdated").pipe();
  }

  loadAccount(data: any ){
    this.socket.emit("balanceLoaded" , data)
  }


}
