import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, EventEmitter, Input, Output } from '@angular/core';
import { ReactiveFormsModule, UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { AllMaterialModule } from 'src/app/angular-material/all-material-module';
import { Customer } from 'src/app/services/data.service';

@Component({
  selector: 'app-customer',
  standalone: true,
  imports: [
    CommonModule,ReactiveFormsModule,AllMaterialModule
  ],
  styleUrl: './customer.component.css',
  templateUrl: './customer.component.html',
  changeDetection:ChangeDetectionStrategy.OnPush,
})
export class CustomerComponent  {
    @Input() data$!:Observable<Customer>;
    @Output() onCustomerFormEmitter = new EventEmitter<any>();
  form!: UntypedFormGroup;
  constructor(
    private fb: UntypedFormBuilder,
    private cdr:ChangeDetectorRef
  ){

  }
 
  ngOnInit(): void {
    this.data$= this.data$.pipe(
        tap((data)=>{
            this.createForm(data);
            this.onCustomerFormEmitter.emit(this.form)
        })
    )
  }

  createForm(data:Customer) {
    this.form = this.fb.group({
        Email: [
          {
            value: data.Email,
            disabled: !data.hasRights,
          },
          [Validators.required]
        ],
        Telephone: [
          {
            value: data.Telephone,
            disabled: !data.hasRights,
          },
        ],
        Address: [
          {
            value: data.Address,
            disabled: !data.hasRights,
          },
        ],
        Pin: [
          {
            value:data.Pin,
            disabled: !data.hasRights,
          },
        ],
      custId: [
            {
              value:data.custId,
              disabled: !data.hasRights,
            },
          ],
      })
    }

  get Email() {
    return this.form.get('Email');
  }
  get Telephone() {
    return this.form.get('Telephone');
  }
  get Address() {
    return this.form.get('Address');
  }
  get Pin() {
    return this.form.get('Pin');
  }
}
