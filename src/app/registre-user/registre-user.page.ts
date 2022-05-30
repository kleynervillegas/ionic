/* eslint-disable @typescript-eslint/naming-convention */
import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup} from '@angular/forms';
import { LoginService } from 'src/app/services/login/login.service';

@Component({
  selector: 'app-registre-user',
  templateUrl: './registre-user.page.html',
  styleUrls: ['./registre-user.page.scss'],
})
export class RegistreUserPage implements OnInit {

  public fb: FormGroup; // Form
  private builderOptions: any;
  // eslint-disable-next-line @typescript-eslint/member-ordering
  public typeNumberId: any = ['V','E','J'];
  // eslint-disable-next-line @typescript-eslint/member-ordering
  public typeUser: any = ['User','admin','Otro'];
  constructor(
    private formBuilder: FormBuilder,
    private loginService: LoginService
  ) {
    this.builderOptions = {
      // _id: [null],
      FullName: [
        null,
        [
          Validators.required
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
        [Validators.required
        ],
      ],
       typeUser: [
        null,
        [Validators.required
        ],
      ],
      confir: [
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
  }

  registre(){
    if(!this.fb.invalid){
      console.log(this.fb.invalid);
      const data = this.fb.value;
      this.loginService.registreUser(data);
    }
  }

}
