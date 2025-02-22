import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VehicleFooterComponent } from './vehicle-footer.component';

describe('VehicleFooterComponent', () => {
  let component: VehicleFooterComponent;
  let fixture: ComponentFixture<VehicleFooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VehicleFooterComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VehicleFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
