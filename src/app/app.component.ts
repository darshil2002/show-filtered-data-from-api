import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AsyncSubject, Observable, ReplaySubject, concat, merge,from, of, map, mergeMap, concatMap, switchMap, delay, pluck, debounceTime, distinctUntilChanged } from 'rxjs';
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

  ngAfterViewInit(): void {

    const formValue=this.searchForm?.valueChanges;
    formValue?.pipe(
    pluck('searTerm'),
    debounceTime(1000),
   ).subscribe(res=>{
      console.log(res);
    })
  }
  title = 'y';
  
  // ngOnInit() {
  //   this.searchService.getSearches().subscribe((data: string) => {
  //     console.log(data);
  //   });
  // }
}

