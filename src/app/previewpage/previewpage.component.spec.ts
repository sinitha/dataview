import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PreviewpageComponent } from './previewpage.component';

describe('PreviewpageComponent', () => {
  let component: PreviewpageComponent;
  let fixture: ComponentFixture<PreviewpageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PreviewpageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PreviewpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
