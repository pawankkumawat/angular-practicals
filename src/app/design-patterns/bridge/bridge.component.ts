import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatTabChangeEvent } from '@angular/material/tabs';

@Component({
  templateUrl: './bridge.component.html',
  styles: [
  ]
})
export class BridgeComponent implements OnInit {
  isLinear = false;
  firstFormGroup!: FormGroup;
  secondFormGroup!: FormGroup;

  constructor(private _formBuilder: FormBuilder) {}

  ngOnInit() {
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required],
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required],
    });
  }

  tabChanged(tabChangeEvent: MatTabChangeEvent): void {
    console.log('tabChangeEvent => ', tabChangeEvent);
    console.log('index => ', tabChangeEvent.index);
  }


  refreshBtnClick(){

  }

  saveBtnClick(){

  }
  discardBtnClick(){

  }
  backBtnClick(){

  }
}
