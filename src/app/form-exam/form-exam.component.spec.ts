import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormExamComponent } from './form-exam.component';

describe('FormExamComponent', () => {
  let component: FormExamComponent;
  let fixture: ComponentFixture<FormExamComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormExamComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FormExamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
