import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecentSalesTable } from './recent-sales-table';

describe('RecentSalesTable', () => {
  let component: RecentSalesTable;
  let fixture: ComponentFixture<RecentSalesTable>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RecentSalesTable]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecentSalesTable);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
