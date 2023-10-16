import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicStatsComponent } from './dynamic-stats.component';

describe('DynamicStatsComponent', () => {
  let component: DynamicStatsComponent;
  let fixture: ComponentFixture<DynamicStatsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DynamicStatsComponent]
    });
    fixture = TestBed.createComponent(DynamicStatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
