/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable @typescript-eslint/no-unused-expressions */
/* eslint-disable @typescript-eslint/member-ordering */
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { LoginService } from 'src/app/services/login/login.service';
import { REGEX_EMAIL ,REGEX_NUMERIC} from 'src/utils/regex';
import { ValidationOnlyNumber,validationPasswordConfir } from 'src/utils/funtion';
import { ToastService } from 'src/app/services/toast/toast.service';

@Component({
  selector: 'app-registre-user',
  templateUrl: './registre-user.page.html',
  styleUrls: ['./registre-user.page.scss'],
})
export class RegistreUserPage implements OnInit {

  public fb: FormGroup; // Form
  private builderOptions: any;
  public typeNumberId: any = ['V', 'E', 'J'];
  public typeUser: any = ['User', 'admin', 'Otro'];

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private loginService: LoginService,
    private toastService: ToastService

  ) {
    this.builderOptions = {
      // _id: [null],
      full_name: [
        null,
        [
          Validators.required,
        ],
      ],
      last_names: [
        null,
        [Validators.required
        ],
      ],
      number_id: [
        null,
        [Validators.required,
          Validators.pattern(REGEX_NUMERIC),
        ],
      ],
      type_number_id: [
        null,
        [Validators.required,
          Validators.pattern(REGEX_NUMERIC),
        ],
      ],
      password: [
        null,
        [Validators.required
        ],
      ],
      number_phone: [
        null,
        [Validators.required
        ],
      ],
      email: [
        null,
        [Validators.required,
          Validators.pattern(REGEX_EMAIL),
        ],
      ],
      role_id: [
        null,
        [Validators.required
        ],
      ],
      password_confirmation: [
        null,
        [Validators.required,
        ],
      ]
    };
    this.fb = this.formBuilder.group(this.builderOptions);

  }

  ngOnInit() {
  }

  async registre() {
    const playload = this.fb.value;
    this.fb.reset;
    const auth = await this.loginService.registreUser(playload).subscribe(data => {
      if (data === 200) {
        this.router.navigate(['/login']);
        return false;
      }
      // this.toastService.toastNotific(data.message);
    });

  }
  validationPasswor(event:any) {
    if(event.target.value!=this.fb.get('password').value){
      this.fb.get('password')?.addValidators([Validators.required]);
      this.fb.updateValueAndValidity();
      this.toastService.toastNotific('contrasenas incorrectas');
    }
  }
}
