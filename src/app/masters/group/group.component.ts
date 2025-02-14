import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RightsService } from 'src/app/services/rights.service';
import { Category, Rights } from 'src/app/models/models';
import { DataService } from 'src/app/services/data.service';

@Component({
    selector: 'app-group',
    templateUrl: './group.component.html',
    styleUrls: ['./group.component.scss'],
    standalone: false
})
export class GroupComponent implements OnInit {
  // form!: FormGroup;
  config!: Configuration;
  form = this.fb.group({
    Id: 0,
    Text: [{ value: 'ABC', disabled: false }, [Validators.required]],
    DateCreated: [{ value: '', disabled: true }],
    DateModified: [{ value: '', disabled: true }],
    IsActive: [{ value: true, disabled: false }],
    IsUsed: [{ value: true, disabled: false }],
  });

  constructor(
    private fb: FormBuilder,
    private rightsService: RightsService,
    private dataService: DataService
  ) {
    // this.buildForm();
    this.form.get('Text')?.value;
    console.log('this.form.get(Text)?.value',this.form.get('Text')?.value)
  }

  buildForm() {
    this.form = this.fb.group({
      Id: 0,
      Text: [{ value: 'ABC', disabled: false }, [Validators.required]],
      DateCreated: [{ value: '', disabled: false }],
      DateModified: [{ value: '', disabled: false }],
      IsActive: [{ value: '', disabled: false }],
      IsUsed: [{ value: '', disabled: false }],
    });
  }
  category!: Category;
  rights!: Rights;
  ngOnInit(): void {
    this.dataService.getMasterData().subscribe((response) => {
      this.category = response;
      this.rightsService.getRights('category').subscribe((response) => {
        this.rights = response;
        this.config = new Configuration();
        this.config.setConfiguration(this.rights, this.category.IsUsed)
        this.form.get('Text')?.setValue(this.category.Text)
        this.form.get('DateCreated')?.setValue(this.category.DateCreated)
        this.form.get('DateModified')?.setValue(this.category.DateModified)
        this.form.get('Text')?.setValue(this.category.Text)
        this.form.get('Text')?.setValue(this.category.Text)
      });
    });
  }
}

export class Configuration {
  isTextDisabled = true;
  isDateCreatedDisabled = true;
  isDateModifiedDisabled = true;
  isActiveDisabled = true;
  deleteButtonDisabled = true;
  saveButtonDisabled = true;
  discardButtonDisabled = true;

  setConfiguration(rights: Rights, isUsed: boolean) {
    if (rights.hasUpdateRights) {
      this.isTextDisabled = false;
      this.saveButtonDisabled = false;
      this.discardButtonDisabled = false;
    }
    if (rights.hasDeleteRights || !isUsed) {
      this.deleteButtonDisabled = false;
    }

  }
}
