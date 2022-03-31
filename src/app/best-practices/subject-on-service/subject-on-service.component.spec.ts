import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubjectOnServiceComponent } from './subject-on-service.component';

describe('SubjectOnServiceComponent', () => {
  let component: SubjectOnServiceComponent;
  let fixture: ComponentFixture<SubjectOnServiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubjectOnServiceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SubjectOnServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
