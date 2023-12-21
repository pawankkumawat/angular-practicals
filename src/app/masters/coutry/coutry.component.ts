import { Component, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { RightsService } from 'src/app/services/rights.service';
import { Master, Rights } from 'src/app/models/models';
import { DataService } from 'src/app/services/data.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-coutry',
  templateUrl: './coutry.component.html',
  styleUrls: ['./coutry.component.scss'],
})
export class CountryComponent implements OnInit {
  form!: UntypedFormGroup;
  country!: Master;
  rights!: Rights;
  canUpdate = false;
  canDelete = false;

  constructor(
    private fb: UntypedFormBuilder,
    private dataService: DataService,
    private activatedRoute: ActivatedRoute,
    private rightsService: RightsService
  ) {
    this.buildForm();
  }

  buildForm() {
    this.form = this.fb.group({
      Id: 0,
      Text: [{ value: '', disabled: false }, [Validators.required]],
      ModifiedBy: [{ value: '', disabled: true }],
      DateModified: [{ value: '', disabled: true }],
      IsDeleted: [{ value: false, disabled: true }],
      IsUsed: [{ value: false, disabled: true }],
    });
  }

  ngOnInit(): void {
    this.rightsService.getRights().subscribe((rights) => {
      this.canDelete = rights.hasCreateRights;
      this.canUpdate = rights.hasUpdateRights;
      this.activatedRoute.params.subscribe((params) => {
        let id = params['id'];
        this.dataService.getCountryById(id).subscribe((response) => {
          this.country = response;
          this.setForm(this.country);
          this.setFormControlsStatus(this.canUpdate, this.canDelete);
        });
      });
    });
  }

  setFormControlsStatus(canUpdate: boolean, canDelete: boolean) {
    canUpdate
      ? this.form.get('Text')?.enable()
      : this.form.get('Text')?.disable();
  }

  setForm(counter: Master) {
    this.form.get('Id')?.setValue(this.country.Id);
    this.form.get('Text')?.setValue(this.country.Text);
    this.form.get('ModifiedBy')?.setValue(this.country.ModifiedBy);
    this.form.get('DateModified')?.setValue(this.country.DateModified);
    this.form.get('IsDeleted')?.setValue(this.country.IsDeleted);
    this.form.get('IsUsed')?.setValue(this.country.IsUsed);
  }
  discardBtnClick() {
    this.setForm(this.country);
  }
  saveBtnClick() {
    let id = this.form.get('Id')?.value;
    let text = this.form.get('text')?.value;
    this.dataService
      .updateCountry(id, text)
      .subscribe((response) => console.log(response));
  }
  deleteBtnClick() {
    // this.router
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
