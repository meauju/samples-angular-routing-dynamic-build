import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MeasureLogsComponent } from './measure-logs.component';

describe('MeasureLogsComponent', () => {
  let component: MeasureLogsComponent;
  let fixture: ComponentFixture<MeasureLogsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MeasureLogsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MeasureLogsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
