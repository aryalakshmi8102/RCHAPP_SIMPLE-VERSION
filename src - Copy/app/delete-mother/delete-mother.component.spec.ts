import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteMotherComponent } from './delete-mother.component';

describe('DeleteMotherComponent', () => {
  let component: DeleteMotherComponent;
  let fixture: ComponentFixture<DeleteMotherComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeleteMotherComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteMotherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
