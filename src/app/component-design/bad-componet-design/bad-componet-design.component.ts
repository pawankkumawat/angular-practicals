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
import { Subject } from 'rxjs';
import { exhaustMap } from 'rxjs/operators';

@Component({
  selector: 'app-bad-componet-design',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule,AllMaterialModule],
  templateUrl: './bad-componet-design.component.html',
  styleUrl: './bad-componet-design.component.scss'
})
export class BadComponetDesignComponent implements Candeactivate   {

   candeactivate():boolean{
   return this.form.touched;
  };

  form!: UntypedFormGroup;
  orderId:number=0;
  hasRights=false;
  orderData:Order|null = null;

  customerData: Customer|null = null
  vehicleData: Vehicle|null = null
  otherInfo: OtherInfo|null = null


  isAllDataReceived=false;
  constructor(
    private fb: UntypedFormBuilder,
    private rightsService: RightsService,
    private dataService:DataService,
    private activatedRoute:ActivatedRoute,
    ) {}


  ngOnInit(): void {
    this.createForm();
    this.activatedRoute.params.subscribe((params)=>{
      this.orderId = params['id'];

      this.rightsService.getRights().subscribe((rights)=>{
        rights.hasUpdateRights?this.hasRights = true:this.hasRights = false;

        this.dataService.getOrderData(this.orderId).subscribe((orderData:Order)=>{
          this.orderData = orderData;
          this.dataService.getCustomerData(orderData.custId).subscribe((data:Customer)=>{
            this.customerData = data;
            this.dataService.getVehicleData(orderData.VehicleId).subscribe((data:Vehicle)=>{
              this.vehicleData = data;
              this.dataService.getOtherInfo(orderData.orderId).subscribe((data:OtherInfo)=>{
                this.otherInfo=data;
                this.isAllDataReceived= true;

                this.Email?.patchValue(this.customerData?.Email)
                this.hasRights?this.Email?.enable():this.Email?.disable();

                this.Address?.patchValue(this.customerData?.Address)
                this.hasRights?this.Address?.enable():this.Address?.disable();

                this.Telephone?.patchValue(this.customerData?.Telephone)
                this.hasRights?this.Telephone?.enable():this.Telephone?.disable();

                this.Pin?.patchValue(this.customerData?.Pin)
                this.hasRights?this.Pin?.enable():this.Pin?.disable();

                this.VehicleNo?.patchValue(this.vehicleData?.VehicleNo)
                this.hasRights?this.VehicleNo?.enable():this.VehicleNo?.disable();

                this.RegistrationDate?.patchValue(this.vehicleData?.RegistrationDate)
                this.hasRights?this.RegistrationDate?.enable():this.RegistrationDate?.disable();

                this.LastServiceDate?.patchValue(this.vehicleData?.LastServiceDate)
                this.hasRights?this.LastServiceDate?.enable():this.LastServiceDate?.disable();

                this.OdometerReading?.patchValue(this.vehicleData?.OdometerReading)
                this.hasRights?this.OdometerReading?.enable():this.OdometerReading?.disable();

                this.Notes?.patchValue(this.otherInfo?.Notes)
                this.hasRights?this.Notes?.enable():this.Notes?.disable();

                this.LastModifiedBy?.patchValue(this.otherInfo?.LastModifiedBy)
                this.hasRights?this.LastModifiedBy?.enable():this.LastModifiedBy?.disable();

              })
            })
          })

        })
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

  isSaveButtonClicked = false;
  saveBtnClick(){
    this.isSaveButtonClicked = true;
    this.dataService.saveData(this.form.getRawValue()).subscribe(()=>{
      this.isSaveButtonClicked = false;
    });
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
    this.Notes?.patchValue(this.otherInfo?.Notes)
    this.LastModifiedBy?.patchValue(this.otherInfo?.LastModifiedBy)
   }

   refreshBtnClick(){
     this.form.reset();
     this.isAllDataReceived =false;
     this.ngOnInit();
   }
}
