import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { DataService } from '../services/data.service';
import { UserService } from '../services/user.service';

@Component({
    selector: 'app-lazy',
    templateUrl: './lazy.component.html',
    styleUrls: ['./lazy.component.scss'],
    changeDetection: ChangeDetectionStrategy.Eager,
    standalone: false
})
export class LazyComponent implements OnInit {
  constructor(private userService:UserService) { }
  user$ = this.userService.user$;
  ngOnInit(): void {
  }

}
