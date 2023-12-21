import { Component, OnInit, ViewChild } from '@angular/core';
import { UntypedFormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-approval',
  templateUrl: './approval.component.html',
})
export class ApprovalComponent {

  constructor(private fb: UntypedFormBuilder,) { }


  form = this.fb.group({
    Text: [{ value: '', disabled: false }, [Validators.required]],
    signature: [{ value: '', disabled: false }, [Validators.required]],
  });

 

}
