import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  form!: FormGroup;
  constructor(
    private fb: FormBuilder,
    private userService: UserService,
    private router:Router) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      username: [{ value: '', disabled: false }, [Validators.required]],
      password: [{ value: '', disabled: false }, [Validators.required]],
    });
  }

  get username() {
    return this.form.get('username');
  }
  get password() {
    return this.form.get('password');
  }

  saveBtnClick() {
    if (this.form.valid) {
      const user = {
        id: 1,
        age: 21,
        name: this.username?.value
      }
      this.userService.broadcastUserData(user);
      this.router.navigateByUrl('dashboard');
    }
  }
}
