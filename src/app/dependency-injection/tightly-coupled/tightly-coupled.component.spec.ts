import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TightlyCoupledComponent } from './tightly-coupled.component';

describe('TightlyCoupledComponent', () => {
  let component: TightlyCoupledComponent;
  let fixture: ComponentFixture<TightlyCoupledComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TightlyCoupledComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TightlyCoupledComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
