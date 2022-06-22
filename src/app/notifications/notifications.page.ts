import { Component, OnInit } from '@angular/core';
import { NotifysService } from 'src/app/services/notifys/notifys.service';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.page.html',
  styleUrls: ['./notifications.page.scss'],
})
export class NotificationsPage implements OnInit {
  public notifications: any = [];

  constructor(
    private notifysService: NotifysService
  ) { }

  ngOnInit() {
  }
  ionViewDidEnter() {
    this.getNotifyUser();
  }

  async getNotifyUser() {
    const a = await this.notifysService.getNotifyUser().subscribe(data => {
      this.notifications = data;
    }, error => {
      console.log(error);
      return [];
    });

  }


}
