import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { LoginService } from '../services/login/login.service';
import { ToastService } from '../services/toast/toast.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  token = 'dsds45s4d4s5dsd455sd55sd5s4d55';
  public fb: FormGroup; // Form
  private builderOptions: any;

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private loginService: LoginService,
    private toastService: ToastService,
  ) {
    this.builderOptions = {
      // _id: [null],
      password: [
        null,
        [
          Validators.required,
          Validators.minLength(4),
          Validators.maxLength(30),
          // Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])[a-zA-Z0-9]+$')
        ],
      ],
      email: [
        null,
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
      if (data === 200) {
        this.router.navigate(['/home/publications']);
        return false;
      }
    });

  }
}
