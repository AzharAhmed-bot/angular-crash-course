import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularReactiveFormComponent } from './angular-reactive-form.component';

describe('AngularReactiveFormComponent', () => {
  let component: AngularReactiveFormComponent;
  let fixture: ComponentFixture<AngularReactiveFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AngularReactiveFormComponent]
    });
    fixture = TestBed.createComponent(AngularReactiveFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
