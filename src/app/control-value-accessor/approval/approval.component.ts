import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ReactiveFormsModule, UntypedFormBuilder, Validators } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { SignatureComponent } from '../signature/signature.component';

@Component({
  selector: 'app-approval',
  templateUrl: './approval.component.html',
  standalone: true,
  imports: [ReactiveFormsModule,CommonModule,MatFormFieldModule,SignatureComponent,MatInputModule],

})
export class ApprovalComponent {

  constructor(private fb: UntypedFormBuilder,) { }


  form = this.fb.group({
    Text: [{ value: '', disabled: false }, [Validators.required]],
    signature: [{ value: '', disabled: false }, [Validators.required]],
  });

 

}
