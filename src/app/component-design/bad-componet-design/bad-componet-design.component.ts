import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule, UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AllMaterialModule } from 'src/app/angular-material/all-material-module';
import { RightsService } from 'src/app/services/rights.service';
import { UserService } from 'src/app/services/user.service';
import { Customer, DataService, Order, OtherInfo, Vehicle } from 'src/app/services/data.service';
import { Candeactivate } from 'src/app/guards/candeactivate.guard';
import { DialogService } from 'src/app/dialogs/dialog.service';

@Component({
  selector: 'app-bad-componet-design',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule,AllMaterialModule],
  templateUrl: './bad-componet-design.component.html',
  styleUrl: './bad-componet-design.component.scss'
})
export class BadComponetDesignComponent implements Candeactivate  {
  form!: UntypedFormGroup;
  candeactivate():boolean{
   return this.form.touched;
  };
  disableAll=false;
  orderData:Order|null = null;
  customerData: Customer|null = null
  vehicleData: Vehicle|null = null
  otherInfo: OtherInfo|null = null
  orderId:number=0;
  isAllDataReceived=false;

  constructor(
    private fb: UntypedFormBuilder,
    private rightsService: RightsService,
    private dataService:DataService,
    private activatedRoute:ActivatedRoute,
    private service: DialogService
    ) {}


  ngOnInit(): void {
    this.createForm();
    this.form.valueChanges.subscribe((status)=>{
      if(!this.form.pristine){
        this.form.markAllAsTouched();
        // this.form.updateValueAndValidity()
      }
    })
    this.activatedRoute.params.subscribe((params)=>{
      this.orderId = params['id']

    this.rightsService.getRights().subscribe((rights)=>{
      if(!rights.hasUpdateRights){
        this.disableAll = true;
      }
      this.dataService.getOrderData().subscribe((data:Order)=>{
        this.orderData = data;
        this.dataService.getCustomerData().subscribe((data:Customer)=>{
          this.customerData = data;
          this.dataService.getVehicleData().subscribe((data:Vehicle)=>{
            this.vehicleData = data;
            this.dataService.getOtherInfo().subscribe((data:OtherInfo)=>{
              this.otherInfo = data;
              this.Email?.patchValue(this.customerData?.Email)
              this.Address?.patchValue(this.customerData?.Address)
              this.Telephone?.patchValue(this.customerData?.Telephone)
              this.Pin?.patchValue(this.customerData?.Pin)
              this.VehicleNo?.patchValue(this.vehicleData?.VehicleNo)
              this.RegistrationDate?.patchValue(this.vehicleData?.RegistrationDate)
              this.LastServiceDate?.patchValue(this.vehicleData?.LastServiceDate)
              this.OdometerReading?.patchValue(this.vehicleData?.OdometerReading)
              this.isAllDataReceived =true;
            })
          })
        })
      }

      )
    })
  })
  }

  createForm() {
    this.form = this.fb.group({
        Email: [
          {
            value: '',
            disabled: false,
          },
          [Validators.required]
        ],
        Telephone: [
          {
            value: '',
            disabled: false,
          },
        ],
        Address: [
          {
            value: '',
            disabled: false,
          },
        ],
        Pin: [
          {
            value: '',
            disabled: false,
          },
        ],
        VehicleNo: [
          {
            value: '',
            disabled: false,
          },
        ],
        OdometerReading: [
          {
            value: '',
            disabled: false,
          },
          [Validators.required]
        ],
        RegistrationDate: [
          {
            value: '',
            disabled: false,
          },
        ],
        LastServiceDate: [
          {
            value: '',
            disabled: false,
          },
        ],
        Notes: [
          {
            value: '',
            disabled: false,
          },
        ],
        LastModifiedBy: [
          {
            value: '',
            disabled: false,
          },
        ],
    });
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
  get Notes() {
    return this.form.get('Notes');
  }
  get LastModifiedBy() {
    return this.form.get('LastModifiedBy');
  }

  saveBtnClick(){
    this.form.getRawValue();
    if(this.form.valid)
    this.dataService.saveData(this.form.getRawValue()).subscribe();

  }
  discardBtnClick(){
   this.form.reset();
   this.Email?.patchValue(this.customerData?.Email)
   this.Address?.patchValue(this.customerData?.Address)
   this.Telephone?.patchValue(this.customerData?.Telephone)
   this.Pin?.patchValue(this.customerData?.Pin)
   this.VehicleNo?.patchValue(this.vehicleData?.VehicleNo)
   this.RegistrationDate?.patchValue(this.vehicleData?.RegistrationDate)
   this.LastServiceDate?.patchValue(this.vehicleData?.LastServiceDate)
   this.OdometerReading?.patchValue(this.vehicleData?.OdometerReading)
   this.isAllDataReceived =true;
  }

  refreshBtnClick(){
    this.form.reset();
    this.isAllDataReceived =false;
    this.ngOnInit();
  }

}
