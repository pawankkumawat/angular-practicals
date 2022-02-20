import { Injectable } from '@angular/core';

export abstract class Strategy {
  abstract processFiles(fileArray: File[]): void;
}

@Injectable({
  providedIn: 'any',
})
export class StrategyWithCompression extends Strategy {
  constructor() {
    super();
  }
  processFiles(filesArray: File[]): void {
    console.log('Processing with Compression');
  }
}

@Injectable({
  providedIn: 'any',
})
export class StrategyWithoutCompression extends Strategy {
  constructor() {
    super();
  }
  processFiles(filesArray: File[]): void {
    console.log('Processing without Compression');
  }
}

export const StrategyMap = new Map<boolean, any>([
  [true, StrategyWithCompression],
  [false, StrategyWithoutCompression],
]);
