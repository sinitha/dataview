import { Component, OnInit, Inject, ElementRef } from '@angular/core';
import { Pipe, PipeTransform } from '@angular/core';
import {MatDialogRef} from '@angular/material';
import {MAT_DIALOG_DATA} from '@angular/material';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'app-opendialog',
  templateUrl: './opendialog.component.html',
  styleUrls: ['./opendialog.component.css']
})

export class OpendialogComponent implements OnInit {
  elRef: ElementRef;
  public elementRef;
  inputvalues:any;
  element:any;
  constructor(elRef: ElementRef, private domSanitizer: DomSanitizer, public thisDialogRef:MatDialogRef<OpendialogComponent>, @Inject(MAT_DIALOG_DATA) public data: any) {
    this.elementRef = elRef;
  }

  ngOnInit() {
  }
  onCloseConfirm(){
    this.inputvalues=[];
    let elements = this.elementRef.nativeElement.querySelectorAll('.form-control');
    elements.forEach(element => {
     this.inputvalues.push(element.value);
    })
    this.element = this.domSanitizer.bypassSecurityTrustHtml(this.inputvalues); 
    document.getElementById("right").innerHTML = this.element;
      console.log("elRef", this.inputvalues);
      this.thisDialogRef.close("Confirm")
  }

}
