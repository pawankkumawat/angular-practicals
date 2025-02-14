import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { Observable } from 'rxjs';
import { User } from 'src/app/models/models';
import { UserService } from 'src/app/services/user.service';
import { SharedC1Component } from 'src/app/shared/shared-c1/shared-c1.component';

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.scss'],
    imports: [CommonModule,
        ReactiveFormsModule,
        FormsModule,
        MatFormFieldModule,
        MatInputModule,
        SharedC1Component]
})
export class DashboardComponent implements OnInit {

  user$!:Observable<User>;
  constructor(private userService:UserService) { }

  ngOnInit(): void {
   this.user$ = this.userService.user$;
  }

}
