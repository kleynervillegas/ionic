import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.page.html',
  styleUrls: ['./form.page.scss'],
})
export class FormPage implements OnInit {
  public fb: FormGroup; // Form
  private builderOptions: any;
  constructor(
    private formBuilder: FormBuilder
  ) {
    this.builderOptions = {
      // _id: [null],
      name: [
        null,
        [
          Validators.required
        ],
      ],
      email: [
        null,
        [Validators.required
        ],
      ],
      mobile: [
        null,
        [Validators.required
        ],
      ]
    };
    this.fb = this.formBuilder.group(this.builderOptions);

   }

  ngOnInit() {
  }
  submitForm(){
    console.log( this.fb.invalid);
  }

}
