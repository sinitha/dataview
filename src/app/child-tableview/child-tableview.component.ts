import { Component, OnInit, Input, Output } from '@angular/core';
import { ParentWebserviceComponent } from '../parent-webservice/parent-webservice.component';


@Component({
  selector: 'app-child-tableview',
  templateUrl: './child-tableview.component.html',
  styleUrls: ['./child-tableview.component.css']
})
export class ChildTableviewComponent implements OnInit {
  constructor(private webservice:ParentWebserviceComponent) { }
  public jasondata:any;
  columns: string[];
  tabledata: string[];
  selectedcol:any;
  ngOnInit() {
     this.delay(200).then(any=>{
     this.jasondata =  this.webservice.getData();
     this.tabledata = this.jasondata;
     this.Createtablefromat(this.jasondata);
     console.log("tttthit", JSON.stringify(this.webservice.getData()))
   });
  }
  Createtablefromat(value){
    console.log("value.......",value)
    this.columns = this.Object_keys(value[0]);
  }
   Object_keys(obj) {
      var keys = [];
      for(var k in obj) keys.push(k);
      return keys;
  }
  isObject(val){
    if(typeof(val) == "object")  {
      return true
    }
      else {return false};
  }
  onChange(val){

    this.selectedcol = val;
      alert(this.selectedcol);

  }
  async delay(ms: number) {
     await new Promise(resolve => setTimeout(()=>resolve(), ms)).then(()=>console.log("fired"));
 }


}
