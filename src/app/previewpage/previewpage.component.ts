import { Component, OnInit } from '@angular/core';
import { Pipe, PipeTransform } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { OpendialogComponent } from '../opendialog/opendialog.component';

@Component({
  selector: 'app-previewpage',
  templateUrl: './previewpage.component.html',
  styleUrls: ['./previewpage.component.css']
})

export class PreviewpageComponent implements OnInit {
  constructor(public dialog: MatDialog,  private domSanitizer: DomSanitizer) { }
  transform(v:string):SafeHtml {
   return this.domSanitizer.bypassSecurityTrustHtml(v);
  }
  ngOnInit() {
  }
  opendialog(){
    this.dialog.open(OpendialogComponent, {
        data: this.transform(document.getElementById("right").innerHTML)
      });
  }
}
