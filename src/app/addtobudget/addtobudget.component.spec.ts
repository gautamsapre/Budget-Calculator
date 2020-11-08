import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddtobudgetComponent } from './addtobudget.component';

describe('AddtobudgetComponent', () => {
  let component: AddtobudgetComponent;
  let fixture: ComponentFixture<AddtobudgetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddtobudgetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddtobudgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
