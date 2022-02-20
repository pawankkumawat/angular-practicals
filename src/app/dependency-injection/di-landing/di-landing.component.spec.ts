import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiLandingComponent } from './di-landing.component';

describe('DiLandingComponent', () => {
  let component: DiLandingComponent;
  let fixture: ComponentFixture<DiLandingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DiLandingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DiLandingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
