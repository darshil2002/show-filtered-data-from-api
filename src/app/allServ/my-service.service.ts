import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class MyServiceService {

  url='http://localhost:3000/allData'
  
  constructor(private http:HttpClient) {}
  
  getSearches():Observable<string>{
      return this.http.get<string>(this.url)
  }
}
