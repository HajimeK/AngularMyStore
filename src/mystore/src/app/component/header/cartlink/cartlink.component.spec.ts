import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CartlinkComponent } from './cartlink.component';

describe('CartlinkComponent', () => {
  let component: CartlinkComponent;
  let fixture: ComponentFixture<CartlinkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CartlinkComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CartlinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
