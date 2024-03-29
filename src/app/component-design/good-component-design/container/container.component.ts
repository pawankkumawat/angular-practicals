import { Component, ContentChild, ViewChild } from '@angular/core';
import { AllMaterialModule } from 'src/app/angular-material/all-material-module';
import { WrapperComponent } from '../wrapper/wrapper.component';
import { GoodComponentDesignComponent } from '../good-component-design.component';
import { of } from 'rxjs';

@Component({
  selector: 'app-container',
  standalone: true,
  imports: [AllMaterialModule,WrapperComponent,GoodComponentDesignComponent],
  templateUrl: './container.component.html',
  styleUrl: './container.component.scss'
})
export class ContainerComponent {
  footerConfig$= of()
}

