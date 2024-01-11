import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, EventEmitter, Input, Output } from '@angular/core';
import { ReactiveFormsModule, UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { AllMaterialModule } from 'src/app/angular-material/all-material-module';
import { Vehicle } from 'src/app/services/data.service';

@Component({
  selector: 'app-vehicle',
  standalone: true,
  imports: [
    CommonModule,ReactiveFormsModule,AllMaterialModule
  ],
  styleUrl: './vehicle.component.css',
  templateUrl: './vehicle.component.html',
  changeDetection:ChangeDetectionStrategy.OnPush,
})
export class VehicleComponent {
    @Input() data$!:Observable<Vehicle>;
    @Output() onVehicleFormEmitter = new EventEmitter<any>();
  form!: UntypedFormGroup;
  constructor(
    private fb: UntypedFormBuilder
  ){

  }

  ngOnInit(): void {
    this.data$=  this.data$.pipe(
        tap((data)=>{
            this.createForm(data);
            this.onVehicleFormEmitter.emit(this.form);
        }),
    )
  }
  
  createForm(data:Vehicle) {
    this.form = this.fb.group({
      VehicleId: [
            {
              value: data.VehicleId,
              disabled: !data.hasRights,
            },
          ],
      VehicleNo: [
        {
          value: data.VehicleNo,
          disabled: !data.hasRights,
        },
      ],
      OdometerReading: [
        {
          value: data.OdometerReading,
          disabled: !data.hasRights,
        },
        [Validators.required]
      ],
      RegistrationDate: [
        {
          value:data.RegistrationDate,
          disabled: !data.hasRights,
        },
      ],
      LastServiceDate: [
        {
          value: data.LastServiceDate,
          disabled: !data.hasRights,
        },
      ],
    })
  }

  get VehicleNo() {
    return this.form.get('VehicleNo');
  }
  get OdometerReading() {
    return this.form.get('OdometerReading');
  }
  get RegistrationDate() {
    return this.form.get('RegistrationDate');
  }
  get LastServiceDate() {
    return this.form.get('LastServiceDate');
  }

 }
