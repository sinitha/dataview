import { Component, OnInit} from '@angular/core';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/Rx';
import { Subscription } from "rxjs";

 @Injectable()

@Component({
  selector: 'app-parent-webservice',
  templateUrl: './parent-webservice.component.html',
  styleUrls: ['./parent-webservice.component.css']
})


export class ParentWebserviceComponent implements OnInit {
  public DataSet: any;
  myVar:boolean;
  constructor(private http: HttpClient) {
    this.getQuote();
  }
  ngOnInit() {}
  getQuote(){
    this.myVar = true;
     this.http
      .get("http://restcountries.eu/rest/v2/all")
      .subscribe(data => this.setData(data));
    }
    setData(res){

      this.DataSet = res;
    }
  getData(){
    this.myVar = false;
    return this.DataSet;

  }

}
