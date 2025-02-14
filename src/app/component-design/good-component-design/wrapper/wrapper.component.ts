import { Component, ContentChild, Input, OnInit } from '@angular/core';
import { AllMaterialModule } from 'src/app/angular-material/all-material-module';
import { FOOTER_TOKEN, Footer } from '../footer.token';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';
import { ConfigService } from '../config.service';
import { Vehicle } from 'src/app/services/data.service';
import { VehicleComponent } from '../vehicle/vehicle.component';
import { CustomerComponent } from '../customer/customer.component';
import { OtherComponent } from '../other/other.component';

@Component({
    selector: 'app-wrapper',
    imports: [CommonModule, AllMaterialModule, VehicleComponent, CustomerComponent, OtherComponent],
    templateUrl: './wrapper.component.html',
    styleUrl: './wrapper.component.scss'
})
export class WrapperComponent{

}
