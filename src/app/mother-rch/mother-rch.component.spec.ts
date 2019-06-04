import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MotherRchComponent } from './mother-rch.component';

describe('MotherRchComponent', () => {
  let component: MotherRchComponent;
  let fixture: ComponentFixture<MotherRchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MotherRchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MotherRchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
