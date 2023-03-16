import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AsyncSubject, Observable, ReplaySubject, concat, merge,from, of, map, mergeMap, concatMap, switchMap, delay, pluck, debounceTime, distinctUntilChanged, tap } from 'rxjs';
// import {MyServiceService}from './allServ/my-service.service'
import {MyServiceService}  from './allServ/my-service.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  {

  @ViewChild('searchForm')
  searchForm: NgForm|undefined;

  constructor (private searchService:MyServiceService)
  { 
  }

  ngAfterViewInit() {
    
    const formValue=this.searchForm?.valueChanges;
    formValue?.pipe(
      map(res => res['searTerm']),
      // pluck('searTerm'),
     
      debounceTime(1000),
    
    distinctUntilChanged(),
    switchMap(data=> this.searchService.getSearches(data))).subscribe(res=>{
      console.log(res);
    })
  }
  title = 'y';

}

