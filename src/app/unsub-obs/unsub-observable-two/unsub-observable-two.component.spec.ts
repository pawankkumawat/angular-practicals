import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnsubObservableTwoComponent } from './unsub-observable-two.component';

describe('UnsubObservableTwoComponent', () => {
  let component: UnsubObservableTwoComponent;
  let fixture: ComponentFixture<UnsubObservableTwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UnsubObservableTwoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UnsubObservableTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
