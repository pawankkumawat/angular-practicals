// import { Component, ViewChild } from '@angular/core';
// import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
// import { SignaturePad } from 'angular2-signaturepad';

// @Component({
//   selector: 'app-signature',
//   templateUrl: './signature.component.html',
//   providers:[{
//     provide:NG_VALUE_ACCESSOR,
//     useExisting:SignatureComponent,
//     multi:true
//   }]
// })
// export class SignatureComponent implements ControlValueAccessor {

//   @ViewChild(SignaturePad) signaturePad!: SignaturePad;


//   signaturePadOptions: Object = {
//     'minWidth': 5,
//     'canvasWidth': 500,
//     'canvasHeight': 300
//   };
//   constructor() { }



//   ngAfterViewInit() {
//     this.signaturePad.set('minWidth', 5);
//     this.signaturePad.clear();
//   }

//   // @Output()
//   // signatureEmitter = new EventEmitter();
//   drawComplete() {
//     // console.log(this.signaturePad.toDataURL());
//     // this.signatureEmitter.emit(this.signaturePad.toDataURL())
//     this.onChange(this.signaturePad.toDataURL());
//     this.onTouch();
//   }

//   drawStart() {
//     console.log('begin drawing');
//   }

//   public clear(): void {
//     this.signaturePad.clear();
//     //  this.signatureEmitter.emit(null);
//     this.onChange('');
//   }


//   value=null;
//   writeValue(obj: any): void {
//     this.value = obj;
//   }
//   onChange! :(value:any)=>void;
//   onTouch!:()=>void;
//   registerOnChange(fn: any): void {
//     this.onChange = fn;
//   }
//   registerOnTouched(fn: any): void {
//     this.onTouch =fn;
//   }

// }
