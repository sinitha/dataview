import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/Rx';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DragulaModule } from 'ng2-dragula';
import {MatCardModule} from '@angular/material';
import {MatButtonModule} from '@angular/material';
import {MatDialogModule} from '@angular/material';
import { Subscription } from "rxjs";
import { AppComponent } from './app.component';
import { ParentWebserviceComponent } from './parent-webservice/parent-webservice.component';
import { ChildTableviewComponent } from './child-tableview/child-tableview.component';
import { FormbuilderComponent } from './formbuilder/formbuilder.component';
import { PreviewpageComponent } from './previewpage/previewpage.component';
import { OpendialogComponent } from './opendialog/opendialog.component';

const appRoutes: Routes = [
  { path: '', component: AppComponent },
  { path: 'task1', component: ParentWebserviceComponent },
  { path: 'task2', component: FormbuilderComponent },
  { path: '',   redirectTo: '/task1', pathMatch: 'full' }
];
@NgModule({
  declarations: [
    AppComponent,
    ParentWebserviceComponent,
    ChildTableviewComponent,
    FormbuilderComponent,
    PreviewpageComponent,
    OpendialogComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(appRoutes),
    DragulaModule.forRoot(),
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MatCardModule,
    MatButtonModule,
    MatDialogModule

    ],
  providers: [],
  entryComponents: [
   OpendialogComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
