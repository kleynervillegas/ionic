import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { LoginService } from '../services/login/login.service';
import { ToastService } from '../services/toast/toast.service';
import { LocalStorageService } from '../services/LocalStorage/local-storage.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  public fb: FormGroup; // Form
  private builderOptions: any;

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private loginService: LoginService,
    private toastService: ToastService,
    private localStorageController: LocalStorageService,
  ) {
    this.builderOptions = {
      // _id: [null],
      password: [
        '1234',
        [
          Validators.required,
          Validators.minLength(4),
          Validators.maxLength(30),
          // Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])[a-zA-Z0-9]+$')
        ],
      ],
      email: [
        'kleynervillegas@gmail.com',
        [Validators.required
        ],
      ],
    };
    this.fb = this.formBuilder.group(this.builderOptions);
  }

  ngOnInit() {
  }

  async login() {
    const playload = this.fb.value;
    const auth = await this.loginService.validateUser(playload).subscribe(data => {
      this.localStorageController.setItem(data.data.authorization);
      this.toastService.toastNotific(data.message);
      this.router.navigate(['/home/publications']);
    }, error => {
      console.log(error.error);
      // this.toastService.toastNotific(error.message);
    });
  }
}
