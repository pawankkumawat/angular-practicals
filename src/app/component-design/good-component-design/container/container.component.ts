import { Component, ContentChild, ViewChild } from '@angular/core';
import { AllMaterialModule } from 'src/app/angular-material/all-material-module';
import { WrapperComponent } from '../wrapper/wrapper.component';
import { GoodComponentDesignComponent } from '../good-component-design.component';
import { of } from 'rxjs';

@Component({
    selector: 'app-container',
    imports: [AllMaterialModule],
    templateUrl: './container.component.html',
    styleUrl: './container.component.scss'
})
export class ContainerComponent {
  footerConfig$= of()
}

