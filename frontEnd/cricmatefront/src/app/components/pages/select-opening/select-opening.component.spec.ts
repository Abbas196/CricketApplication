import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectOpeningComponent } from './select-opening.component';

describe('SelectOpeningComponent', () => {
  let component: SelectOpeningComponent;
  let fixture: ComponentFixture<SelectOpeningComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SelectOpeningComponent]
    });
    fixture = TestBed.createComponent(SelectOpeningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
