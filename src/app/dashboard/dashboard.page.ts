import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {

  public chats = [
    {id: 1, pic: '../../assets/c1.jpg', name: 'Kitty Perk', message: ' Bye :)', status: 'unread', time: '2 minutes ago', active: false},
    {id: 2, pic: '../../assets/c2.jpg', name: 'Austin Asamoah', message: ' Hey, are you there!!!', status: 'online', time: '2 minutes ago', active: false},
    {id: 3, pic: '../../assets/c3.jpg', name: 'Dale Fletcher', message: '', status: 'offline', time: '2 minutes ago', active: false},
    {id: 4, pic: '../../assets/c4.jpg', name: 'Racheal Animah', message: '', status: 'waiting', time: 'now', active: false},
    {id: 5, pic: '../../assets/c5.jpg', name: 'Flora Brown', message: '', status: 'offline', time: '10 minutes ago', active: false},
    {id: 6, pic: '../../assets/c6.jpg', name: 'Charles Acosta', message: '', status: 'busy', time: 'now', active: false},
    {id: 7, pic: '../../assets/c7.jpg', name: 'Kate Abba', message: 'How is it going', status: 'online', time: '2 minutes ago', active: false},
    {id: 8, pic: '../../assets/c8.jpg', name: 'Hana Daugherty', message: 'Gud night', status: 'unread', time: '2 minutes ago', active: false},
    {id: 9, pic: '../../assets/c9.jpg', name: 'Daniel Daugherty', message: '', status: 'waiting', time: '5 minutes ago', active: false},
    {id: 10, pic: '../../assets/c10.jpg', name: 'Alice Santa', message: 'Great idea', status: 'online', time: '2 minutes ago', active: false}
  ];

  public itemSet: Boolean = false;
  public active: any[] = [];

  constructor(private alertCtrl: AlertController) { }

  ngOnInit() {
    setTimeout(() => {
      this.itemSet = true;
    }, 1000);
  }

  swiped(ev, id){
    const ratio = ev.detail.ratio;
    console.log(ratio);
    if (ratio > 5){
      this.presentConfirm(id);
    }
  }

  async presentConfirm(id) {
    const alert = await this.alertCtrl.create({
      header: 'Archive Chat',
      message: 'Archive this chat?',
      buttons: [{
        text: 'Cancel',
        role: 'cancel',
        handler: () => {
        }
      },
      {
        text: 'Archive',
        handler: () => {
          const removeIndex = this.chats.map(function (item){
            return item.id;
          }).indexOf(id);

          this.chats.splice(removeIndex, 1);
        }
      }]
    });
    await alert.present();
  }

  onClick(ev, i){
    console.log(i);
    for(let j = 0; j < this.chats.length; j++){
      this.chats[j].active = false;
    }
    this.chats[i].active = true;
  }

}
