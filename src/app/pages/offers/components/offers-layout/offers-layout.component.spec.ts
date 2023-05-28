import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OffersLayoutComponent } from './offers-layout.component';

describe('OffersLayoutComponent', () => {
  let component: OffersLayoutComponent;
  let fixture: ComponentFixture<OffersLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OffersLayoutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OffersLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
