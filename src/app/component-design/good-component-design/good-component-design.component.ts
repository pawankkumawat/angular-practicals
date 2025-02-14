import { Component, OnInit } from '@angular/core';
import { CustomerComponent } from './customer/customer.component';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AllMaterialModule } from 'src/app/angular-material/all-material-module';
import { OtherComponent } from './other/other.component';
import { VehicleComponent } from './vehicle/vehicle.component';
import { ActivatedRoute } from '@angular/router';
import { Customer, DataService, Order, OtherInfo, Vehicle } from 'src/app/services/data.service';
import { BehaviorSubject, Observable, Subject, combineLatest, forkJoin, of } from 'rxjs';
import { concatMap, delay, exhaustMap, filter, map, mapTo, share, shareReplay, startWith, take, tap, } from 'rxjs/operators';
import { Rights } from 'src/app/models/models';
import { RightsService } from 'src/app/services/rights.service';
import { FOOTER_TOKEN, Footer } from './footer.token';
import { WrapperComponent } from './wrapper/wrapper.component';
import { ConfigService } from './config.service';
import { Candeactivate } from 'src/app/guards/candeactivate.guard';

@Component({
    selector: 'app-good-component-design',
    imports: [CommonModule, CustomerComponent, OtherComponent, VehicleComponent, AllMaterialModule, WrapperComponent, ReactiveFormsModule],
    templateUrl: './good-component-design.component.html',
    styleUrl: './good-component-design.component.scss'
})
export class GoodComponentDesignComponent implements OnInit, Candeactivate  {

    candeactivate():boolean{
        return this.formArr.touched;
       };

  data$!: Observable<boolean>;

  customer$ = new BehaviorSubject<Customer>(new Customer());
  vehicle$ = new BehaviorSubject<Vehicle>(new Vehicle());
  other$  = new BehaviorSubject<OtherInfo>(new OtherInfo());
  rightsSub  = new BehaviorSubject<boolean>(false);
  constructor(private dataService: DataService,
    private activatedRoute: ActivatedRoute,
    private rightsService: RightsService,
    private fb:FormBuilder) {
    
  }
    ngOnInit(): void {
        this.declareStreams();
        this.subscribeSave();
    }


  declareStreams() {
    
    let id$ = this.activatedRoute.params.pipe(
      map((params) => +params['id']),
      take(1)
      );
    let rights$ = this.rightsService.getRights().pipe(
        map((rights)=>rights.hasUpdateRights),
        tap((updateRight)=>this.rightsSub.next(updateRight)));

    let orderData$ = id$.pipe(
      concatMap((orderId) => this.dataService.getOrderData(orderId)),
      share()
      )
    let customerData$ = orderData$.pipe(
      concatMap((order: Order) => this.dataService.getCustomerData(order.custId)),
    )
    let vehicleData$ = orderData$.pipe(
      concatMap((order: Order) => this.dataService.getVehicleData(order.VehicleId)),
    )
    let otherData$ = orderData$.pipe(
      concatMap((order: Order) => this.dataService.getOtherInfo(order.orderId)),
    )

    this.data$ = forkJoin([customerData$,vehicleData$,otherData$,rights$]).pipe(
        tap(([customer,vehicle,otherData,hasRights])=>{
            this.formArr.clear();
            this.formArr.reset();
            customer.hasRights = hasRights;
            vehicle.hasRights = hasRights;
            otherData.hasRights = hasRights;
            this.customer$.next(customer);
            this.vehicle$.next(vehicle);
            this.other$.next(otherData);
            
          console.log('all data received');
        }),
        map(()=>true)
      )
  }
  
  refresh(){
    this.declareStreams();
  }

  discard(){
    this.customer$.next(this.customer$.getValue());
    this.vehicle$.next(this.vehicle$.getValue());
    this.other$.next(this.other$.getValue());
    this.formArr.markAsPristine();
    this.formArr.markAsUntouched();
  }

  sub = new Subject<boolean>();

  save(){
    
    this.sub.next();
  }

  subscribeSave(){
    let completeObj = {}
    this.formArr.controls.forEach((fg)=>{
        let obj = fg.getRawValue();
       Object.assign(completeObj,obj)
    })
    this.sub.asObservable().pipe(
      exhaustMap((x)=>this.dataService.saveData(completeObj))
    )
    .subscribe(()=>{
        this.refresh();
    });
  }

 
  formArr = this.fb.array([]);

  onVehicleFormHandler(event:any){
  this.formArr.push(event);
  }
  onCustomerFormHandler(event:any){
  this.formArr.push(event);
  }
  onOtherFormHandler(event:any){
  this.formArr.push(event);
  }

  isPristine$ = this.formArr.valueChanges.pipe(
    delay(0),
    map(()=>this.formArr.pristine),
    )
 isInvalid$ = this.formArr.valueChanges.pipe(
    delay(0),
    map(()=> this.formArr.invalid),
    )

  saveButtonStatus$ = combineLatest([this.isPristine$,this.isInvalid$,this.rightsSub]).pipe(
    map(([isPristine,isInvalid,rights])=>{
        return isPristine || isInvalid || !rights;
    })
  )

  formNotDirty$ = this.formArr.valueChanges.pipe(
    delay(0),
    map(()=> !this.formArr.dirty),
    )
  discardBtnStatus$ = combineLatest([this.formNotDirty$,this.rightsSub]).pipe(
    map(([isPristine,rights])=>{
        console.log('discardBtnStatus$',isPristine)
        return isPristine ||  !rights;
    })
  )

}


