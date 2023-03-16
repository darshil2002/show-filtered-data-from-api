import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
import { serach } from './allInterface/searh.interface';


@Injectable({
  providedIn: 'root'
})
export class MyServiceService {

  url='http://localhost:3000/allData'
  
  constructor(private http:HttpClient) {}
  
  getSearches(sea: string):Observable<serach>{
      return this.http.get<serach>(this.url+'?q='+sea)
  }
}
