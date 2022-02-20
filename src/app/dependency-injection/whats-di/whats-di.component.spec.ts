import { ComponentFixture, TestBed } from '@angular/core/testing';
import { empty, Observable, of } from 'rxjs';

import { WhatsDiComponent } from './whats-di.component';

describe('WhatsDiComponent', () => {
  let component: WhatsDiComponent;
  let fixture: ComponentFixture<WhatsDiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WhatsDiComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WhatsDiComponent);
    component = fixture.componentInstance;
  });

  it('should set data to 30 ', () => {
    let spy = spyOn(component.countService, 'getCount').and.returnValue(of(30)) ;
    fixture.detectChanges();
    expect(component.data).toBe(30);
  });
});
