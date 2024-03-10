import { Injectable } from '@angular/core';
import { SocketIoModule, SocketIoConfig , Socket } from 'ngx-socket-io';

const config: SocketIoConfig = { url: 'http://localhost:3001', options: {} };

@Injectable({
  providedIn: 'root'
})
export class ProductService extends Socket {
  
  constructor() { 
    super(config)
  }
}
