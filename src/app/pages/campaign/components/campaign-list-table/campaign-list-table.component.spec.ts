import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoriesListTableComponent } from './campaign-list-table.component';

describe('CategoriesListTableComponent', () => {
  let component: CategoriesListTableComponent;
  let fixture: ComponentFixture<CategoriesListTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CategoriesListTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoriesListTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
