import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForgetComponent } from './forget.component';

describe('ForgetComponent', () => {
  let component: ForgetComponent;
  let fixture: ComponentFixture<ForgetComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ForgetComponent]
    });
    fixture = TestBed.createComponent(ForgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
