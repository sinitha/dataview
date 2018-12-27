import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormArray, Validators, FormBuilder } from '@angular/forms';
import { DragulaService } from "ng2-dragula";
@Component({
  selector: 'app-formbuilder',
  templateUrl: './formbuilder.component.html',
  styleUrls: ['./formbuilder.component.css']
})
export class FormbuilderComponent implements OnInit {

 constructor(private dragulaService: DragulaService) {
   dragulaService.createGroup('COPYABLE', {
    copy: (el, source) => {
      return source.id === 'left';
    },
    accepts: (el, target, source, sibling) => {
      return target.id !== 'left';
    }
  });
 }


  ngOnInit() {
  }

}
