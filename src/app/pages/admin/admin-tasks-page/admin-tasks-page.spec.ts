import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminTasksPage } from './admin-tasks-page';

describe('AdminTasksPage', () => {
  let component: AdminTasksPage;
  let fixture: ComponentFixture<AdminTasksPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminTasksPage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminTasksPage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
