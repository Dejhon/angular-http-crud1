import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class DataService {
  private REST_API_SERVER = "http://localhost:3000/products";

  constructor(private httpclient: HttpClient) { }

  public sendGetRequest(){
    return this.httpclient.get<any[]>(this.REST_API_SERVER)
  }

  public  additem(data:any){
    return this.httpclient.post<any[]>(this.REST_API_SERVER, data)
  }

  public getItem(id:number){
    return this.httpclient.get<any[]>(this.REST_API_SERVER + '/' + id);
  }
}
