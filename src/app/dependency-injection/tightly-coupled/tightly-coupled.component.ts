import { Component, Injectable, Input, OnInit } from '@angular/core';
import {
  CompressImageProcessor,
  ImageProcessor,
  Processor,
} from '../image-process';

@Component({
    selector: 'app-tightly-coupled',
    templateUrl: './tightly-coupled.component.html',
    styleUrls: ['./tightly-coupled.component.scss'],
    standalone: false
})
export class TightlyCoupledComponent implements OnInit {
  constructor() {}
  ngOnInit(): void {}
  @Input() isCompress = false;

  uploadFile(target: EventTarget | null) {
    const targetElement = target as HTMLInputElement;
    const filesArray = Array.prototype.slice.call(targetElement?.files);
    !this.isCompress
      ? new ImageProcessor().processFiles(filesArray)
      : new CompressImageProcessor().processFiles(filesArray);
  }
}
