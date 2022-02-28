import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProvideDataService {

  constructor(private http:HttpClient) { }
  someData:any;

  getUser(){
    // return this.http.get("https://jsonplaceholder.typicode.com/users").subscribe((data)=>console.log(data))
    return this.http.get("https://jsonplaceholder.typicode.com/users");
    
  }
}
