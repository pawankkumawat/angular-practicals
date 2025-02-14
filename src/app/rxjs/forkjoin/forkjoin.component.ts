import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormArray, UntypedFormBuilder, UntypedFormGroup, ValidatorFn, Validators } from '@angular/forms';
import { forkJoin } from 'rxjs';
import { map } from 'rxjs/operators';
import { NameValuePair, ReportData } from 'src/app/models/models';
import { DataService } from 'src/app/services/data.service';

@Component({
    selector: 'app-forkjoin',
    templateUrl: './forkjoin.component.html',
    standalone: false
})
export class ForkjoinComponent implements OnInit {
    form!:UntypedFormGroup;
    reports :NameValuePair[]=[];
    reportFormats :NameValuePair[]=[];
    // isReportsAvailable=false;
    // isReportFormatAvailable=false;
    // isReportDataAvailable=false;
    isAllDataAvailable=false;
    constructor(
      private fb: UntypedFormBuilder,
      private dataService:DataService
      ) { 
        this.form =this.fb.group({
          reportControl:[{value:'',disabled:false}],
          reportFormatControl:[{value:'',disabled:false}],
        });
    }
   
    get reportControl(){
      return this.form.get('reportControl');
    }
    get reportFormatControl(){
      return this.form.get('reportFormatControl');
    }
    ngOnInit(): void {
      // this.dataService.getReports().subscribe((reports)=>{
      //   this.isReportsAvailable = true;
      //   this.reports=reports;
      // })
      // this.dataService.getReportFormats().subscribe((reportFormats)=>{
      //   this.isReportFormatAvailable = true;
      //   this.reportFormats=reportFormats;
      // })
      // this.dataService.getSavedReportData().subscribe((reportData)=>{
      //   this.isReportDataAvailable = true;
      //   this.reportControl?.patchValue(reportData.reportValue);
      //   this.reportFormatControl?.patchValue(reportData.reportFormatValue);
      // })

      forkJoin([this.dataService.getReports(),this.dataService.getReportFormats(),this.dataService.getSavedReportData()]).pipe(
        map(([reports,reportFormats,reportData])=>{
          this.reportControl?.patchValue(reportData.reportValue);
        this.reportFormatControl?.patchValue(reportData.reportFormatValue);
          this.reportFormats =reportFormats;
          this.reports= reports;
          this.isAllDataAvailable = true;
        })
      ).subscribe()
    }
}




  