import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HighcardComponent } from './highcard.component';

describe('HighcardComponent', () => {
  let component: HighcardComponent;
  let fixture: ComponentFixture<HighcardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HighcardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HighcardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
