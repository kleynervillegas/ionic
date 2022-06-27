import { Component, OnInit } from '@angular/core';
import { AlertController, ToastController } from '@ionic/angular';
import { Alert } from 'selenium-webdriver';
import { NotifysService } from 'src/app/services/notifys/notifys.service';
import { CardService } from 'src/app/services/cards/card.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.page.html',
  styleUrls: ['./card.page.scss'],
})
export class CardPage implements OnInit {
  public cars: any = [];
  public notifications: any = [];

  constructor(
    private cardService: CardService,
    public toastController: ToastController,
    public alertController: AlertController,
    private notifysService: NotifysService,
  ) { }

  ngOnInit() {
  }

  ionViewDidEnter() {
    this.getCars();
    this.getNotifyUser();
  }
  async getCars() {
    const a = await this.cardService.getCars().subscribe(data => {
      this.cars = data;
      console.log( this.cars)
    }, error => {
      console.log(error);
      return [];
    });
  }

  async getNotifyUser() {
    const a = await this.notifysService.getNotifyUser().subscribe(data => {
      this.notifications = data;
    }, error => {
      console.log(error);
      return [];
    });

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
