import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransationHistoryComponent } from './transation-history.component';

describe('TransationHistoryComponent', () => {
  let component: TransationHistoryComponent;
  let fixture: ComponentFixture<TransationHistoryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TransationHistoryComponent]
    });
    fixture = TestBed.createComponent(TransationHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
