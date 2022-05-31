import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { LoginService } from 'src/app/services/login/login.service';
import { REGEX_EMAIL } from 'src/utils/regex';

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
    private loginService: LoginService
  ) {
    this.builderOptions = {
      // _id: [null],
      FullName: [
        null,
        [
          Validators.required,
        ],
      ],
      LastNames: [
        null,
        [Validators.required
        ],
      ],
      NumberId: [
        null,
        [Validators.required
        ],
      ],
      password: [
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
      typeUser: [
        null,
        [Validators.required
        ],
      ],
      password_confirmation: [
        null,
        [Validators.required
        ],
      ],
      typeNumberId: [
        null,
        [Validators.required
        ],
      ]
    };
    this.fb = this.formBuilder.group(this.builderOptions);

  }

  ngOnInit() {
    console.log(REGEX_EMAIL);
  }

  async registre() {
    const playload = this.fb.value;
    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    this.fb.reset;
    const auth = await this.loginService.registreUser(playload).subscribe(data => {
      if (data === 200) {
        this.router.navigate(['/login']);
        return false;
      }
      // this.toastService.toastNotific(data.message);
    });

  }

}
