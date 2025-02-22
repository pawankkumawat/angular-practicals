import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { CustomerComponent } from '../good-component-design/customer/customer.component';
import { AllMaterialModule } from 'src/app/angular-material/all-material-module';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Observable, BehaviorSubject, forkJoin, Subject, combineLatest } from 'rxjs';
import { map, take, tap, concatMap, share, exhaustMap, delay } from 'rxjs/operators';
import { Customer, Vehicle, OtherInfo, DataService, Order } from 'src/app/services/data.service';
import { RightsService } from 'src/app/services/rights.service';
import { FOOTER_TOKEN, IFooter } from '../token';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-customer-footer',
  imports: [CommonModule,CustomerComponent,AllMaterialModule,FooterComponent],
  templateUrl: './customer-footer.component.html',
  styleUrl: './customer-footer.component.scss',
  standalone:true,
  providers:[{
    provide:FOOTER_TOKEN,
    useExisting:CustomerFooterComponent
  }]
})
export class CustomerFooterComponent implements IFooter {

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
            
          // console.log('all data received');
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
    console.log('Saving Customer');
    this.sub.next();
  }

  subscribeSave(){
    let completeObj = {}
    this.formArr.controls.forEach((fg)=>{
        let obj = fg.getRawValue();
       Object.assign(completeObj,obj)
    })
    this.sub.asObservable().pipe(
      exhaustMap((x)=>this.dataService.saveData(completeObj)),
      tap(()=>console.log('Customer Data saved'))
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