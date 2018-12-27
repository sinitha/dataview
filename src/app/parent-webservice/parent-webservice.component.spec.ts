import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentWebserviceComponent } from './parent-webservice.component';

describe('ParentWebserviceComponent', () => {
  let component: ParentWebserviceComponent;
  let fixture: ComponentFixture<ParentWebserviceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParentWebserviceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParentWebserviceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
