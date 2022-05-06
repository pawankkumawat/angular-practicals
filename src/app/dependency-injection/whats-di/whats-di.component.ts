import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { map } from 'rxjs/operators';
import { Rights } from 'src/app/models/models';
import { DataService } from 'src/app/services/data.service';
import { ConsoleLoggerService } from './console-logger.service';
import { CountService, RightsService } from '../../services/rights.service';
import { EventLoggerService } from './event-logger.service';

@Component({
  selector: 'app-whats-di',
  templateUrl: './whats-di.component.html',
  styleUrls: ['./whats-di.component.scss'],
})
export class WhatsDiComponent implements OnInit {
  constructor(private loggerService:ConsoleLoggerService) {
  }

  ngOnInit(): void {
    this.loggerService
      .log('data')
      .subscribe();
  }
}
