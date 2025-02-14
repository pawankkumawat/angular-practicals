import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { map } from 'rxjs/operators';
import { User } from '../models/models';
import { UserService } from '../services/user.service';

@Component({
    selector: 'app-logout',
    templateUrl: './logout.component.html',
    styleUrls: ['./logout.component.scss'],
    standalone: false
})
export class LogoutComponent implements OnInit {
  id$ = this.userService.user$.pipe(
    map((user:User)=>user.id)
  );
  constructor(private userService: UserService, private router: Router) {}

  ngOnInit(): void {}

  onLogoutClick() {
    this.userService.broadcastUserData({
      id: 0,
      age: 0,
      name: '',
    });
    this.router.navigateByUrl('login');
  }
}
