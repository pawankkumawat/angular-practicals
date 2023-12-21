import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule, ReactiveFormsModule, UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';
import {MatButtonModule} from '@angular/material/button';
import { Candeactivate } from '../guards/candeactivate.guard';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule
  ],
})
export class LoginComponent implements OnInit ,Candeactivate {
  form!: UntypedFormGroup;
  constructor(
    private fb: UntypedFormBuilder,
    private userService: UserService,
    private router:Router) {}

    candeactivate():boolean{
      return this.form.touched;
     };

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
