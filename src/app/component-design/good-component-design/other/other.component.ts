import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { ReactiveFormsModule, UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { AllMaterialModule } from 'src/app/angular-material/all-material-module';
import { OtherInfo } from 'src/app/services/data.service';

@Component({
    selector: 'app-other',
    imports: [
        CommonModule, ReactiveFormsModule, AllMaterialModule
    ],
    styleUrl: './other.component.css',
    templateUrl: './other.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class OtherComponent {
    @Input() data$!:Observable<OtherInfo>;
    @Output() onOtherFormEmitter = new EventEmitter<any>();
  form!: UntypedFormGroup;
  constructor(
    private fb: UntypedFormBuilder,
  ){

  }
  ngOnInit(): void {
    // this.createForm();
    this.data$ = this.data$.pipe(
        tap((data)=>{
            this.createForm(data);
            this.onOtherFormEmitter.emit(this.form);
        })
    )
   
  }
  createForm(data:OtherInfo) {
    this.form = this.fb.group({
      Notes: [
        {
          value: data.Notes,
          disabled: !data.hasRights,
        },
      ],
      LastModifiedBy: [
        {
          value: data.LastModifiedBy,
          disabled: !data.hasRights,
        },
      ],
    })
  }
  get Notes() {
    return this.form.get('Notes');
  }
  get LastModifiedBy() {
    return this.form.get('LastModifiedBy');
  }
}
