import { Injectable } from "@angular/core";


 
  export class ImageProcessor {
   

  processFiles(filesArray: File[]) {
    console.log('processing files', filesArray);
  }
  
  }
  
  export class CompressImageProcessor  {
    processFiles(filesArray: File[]): void {
      console.log('Processing with Compression');
    }

  }


















  export abstract class Processor {
    abstract processFiles(filesArray: File[]): void;
  }