import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildRCHComponent } from './child-rch.component';

describe('ChildRCHComponent', () => {
  let component: ChildRCHComponent;
  let fixture: ComponentFixture<ChildRCHComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChildRCHComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChildRCHComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
