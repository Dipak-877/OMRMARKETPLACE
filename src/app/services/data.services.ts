import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class DataService {
    baseUrl='http://jsonplaceholder.typicode.com/todos';
  constructor(private http: HttpClient) { }
  getConfig() {
    return this.http.get(this.baseUrl);
    
  }
}