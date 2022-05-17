import { Component, OnInit } from '@angular/core';
import { AlertController, ToastController } from '@ionic/angular';
import { Alert } from 'selenium-webdriver';
import { CardService } from 'src/app/services/card.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.page.html',
  styleUrls: ['./card.page.scss'],
})
export class CardPage implements OnInit {
  public cities: any = [];
  public permissiion: boolean;

  constructor(
    private cardService: CardService,
    public toastController: ToastController,
    public alertController: AlertController,
  ) { }

  ngOnInit() {
    this.permissiion = true;
    this.getCities();
  }
  getCities() {
    this.cardService.getCities().subscribe(res => this.cities = res);
  }

  async presentToast1() {
    const toast = await this.toastController.create({
      message: 'Ciudad seleccionado',
      duration: 500,
      position: 'bottom',
    });
    toast.present();
  }

  async presentAlert1() {
    const alert = await this.alertController.create({
      header: 'Borrar Ciudad',
      message: 'Se ha borrado la Ciudad Correctamebte',
      buttons: ['ok'],
    });
    await alert.present();
    const result = await alert.onDidDismiss();
    console.log(result);
  }

  async presentAlert2() {
    const alert = await this.alertController.create({
      header: 'Borrar Ciudad',
      message: 'Se ha borrado la Ciudad Correctamebte',
      buttons: [
        {
          text: 'No',
          handler: () => {
            console.log('no cancele');
          }
        },
        {
          text: 'Si',
          handler: () => {
            console.log('cancele');
          }
        }
      ]
    });
    await alert.present();
    const result = await alert.onDidDismiss();
    console.log(result);
  }

}
