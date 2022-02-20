import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BranchingTwoComponent } from './branching-two.component';

describe('BranchingTwoComponent', () => {
  let component: BranchingTwoComponent;
  let fixture: ComponentFixture<BranchingTwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BranchingTwoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BranchingTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
