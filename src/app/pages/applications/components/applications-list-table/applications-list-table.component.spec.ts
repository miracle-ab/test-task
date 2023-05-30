import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplicationsListTableComponent } from './applications-list-table.component';

describe('ApplicationsListTableComponent', () => {
  let component: ApplicationsListTableComponent;
  let fixture: ComponentFixture<ApplicationsListTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApplicationsListTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ApplicationsListTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
