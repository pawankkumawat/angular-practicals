import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateMemoryLeakComponent } from './create-memory-leak.component';

describe('CreateMemoryLeakComponent', () => {
  let component: CreateMemoryLeakComponent;
  let fixture: ComponentFixture<CreateMemoryLeakComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateMemoryLeakComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateMemoryLeakComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
