import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

 configSubject = new BehaviorSubject<any>({saveBtnDisabled:true,discardBtnDisabled:true})
 footerConfig$ = this.configSubject.asObservable();
  constructor() { }

}
