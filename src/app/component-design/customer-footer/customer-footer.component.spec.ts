import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerFooterComponent } from './customer-footer.component';

describe('CustomerFooterComponent', () => {
  let component: CustomerFooterComponent;
  let fixture: ComponentFixture<CustomerFooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CustomerFooterComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomerFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
