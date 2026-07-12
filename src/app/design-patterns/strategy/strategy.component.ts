import { Component, Injector, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { tap } from 'rxjs/operators';
import { RouterdataService } from 'src/app/services/routerdata.service';
import { Strategy, StrategyMap } from './strategies';

@Component({
    selector: 'app-strategy',
    templateUrl: './strategy.component.html',
    styleUrls: ['./strategy.component.scss'],
    changeDetection: ChangeDetectionStrategy.Eager,
    standalone: false
})
export class StrategyComponent implements OnInit {
  isChecked =true;//default value
strategy!: Strategy;
  constructor(private injector: Injector) {}
  fileProcessingMode = 'Compressed';
  ngOnInit() {
    this.strategy = this.injector.get<Strategy>(StrategyMap.get(true));
  }
  uploadFile(target: EventTarget | null) {
    const t=target as HTMLInputElement;
    const filesArray = Array.prototype.slice.call(t?.files);
    this.strategy.processFiles(filesArray);
  }
  toggleHandler(isChecked: boolean) {
    this.strategy = this.injector.get<Strategy>(StrategyMap.get(isChecked));
  }

}
