import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildTableviewComponent } from './child-tableview.component';

describe('ChildTableviewComponent', () => {
  let component: ChildTableviewComponent;
  let fixture: ComponentFixture<ChildTableviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChildTableviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChildTableviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
