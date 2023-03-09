import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  formLogin: FormGroup = new FormGroup({});

  constructor(private fb: FormBuilder, private router: Router) {}

  ngOnInit() {
    this.initData();
  }

  initData() {
    this.formLogin = this.fb.group({
      emailCtrl: ['', Validators.compose([Validators.required, Validators.pattern('[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+.([a-zA-Z]{2,3})$')])],
      passwordCtrl: ['', Validators.compose([Validators.required])],
    });
  }

  login() {
    console.log('login');
  }

  registro() {
    console.log('registro');
    this.router.navigateByUrl('/register');
  }

  solicitudCambioContrasena() {
    console.log('registro');
  }

  get ctrlForm() {
    return this.formLogin.controls;
  }
}
