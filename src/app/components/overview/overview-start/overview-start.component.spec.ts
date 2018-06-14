import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OverviewStartComponent } from './overview-start.component';

describe('OverviewStartComponent', () => {
  let component: OverviewStartComponent;
  let fixture: ComponentFixture<OverviewStartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OverviewStartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OverviewStartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
