import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BranchingComponent } from './branching.component';

describe('BranchingComponent', () => {
  let component: BranchingComponent;
  let fixture: ComponentFixture<BranchingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BranchingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BranchingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
