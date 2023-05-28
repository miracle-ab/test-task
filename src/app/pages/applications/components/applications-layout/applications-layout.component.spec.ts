import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplicationsLayoutComponent } from './applications-layout.component';

describe('ApplicationsLayoutComponent', () => {
  let component: ApplicationsLayoutComponent;
  let fixture: ComponentFixture<ApplicationsLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApplicationsLayoutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ApplicationsLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
