import { Injectable } from '@angular/core';
import { AlertController, ToastController } from '@ionic/angular';


@Injectable({
  providedIn: 'root'
})
export class ToastService {

  constructor(
    public toastController: ToastController,
    public alertController: AlertController,
  ) { }

  toastNotific(msg){
    const toast =  this.toastController.create({
      message: msg,
      duration: 5000,
      position: 'top',
    }).then( alert=> alert.present());
  }
}
