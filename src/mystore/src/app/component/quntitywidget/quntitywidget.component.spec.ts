import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuntitywidgetComponent } from './quntitywidget.component';

describe('QuntitywidgetComponent', () => {
  let component: QuntitywidgetComponent;
  let fixture: ComponentFixture<QuntitywidgetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuntitywidgetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuntitywidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
