import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyTeamInfoComponent } from './my-team-info.component';

describe('MyTeamInfoComponent', () => {
  let component: MyTeamInfoComponent;
  let fixture: ComponentFixture<MyTeamInfoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MyTeamInfoComponent]
    });
    fixture = TestBed.createComponent(MyTeamInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
