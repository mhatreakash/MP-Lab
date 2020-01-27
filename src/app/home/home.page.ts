import { Component } from '@angular/core';
import { ActionSheetController, AlertController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(public actionSheetController: ActionSheetController,public alertController: AlertController) {}

  async presentActionSheet() {
    const actionSheet = await this.actionSheetController.create({
      header: 'Options',
      buttons: [{
        text: 'Login',
        icon: 'heart',
        handler: () => {
          console.log('Login clicked');
        }
      }, {
        text: 'Cancel',
        icon: 'close',
        role: 'cancel',
        handler: () => {
          console.log('Cancel clicked');
        }
      }]
    });
    await actionSheet.present();
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Confirm',
      subHeader: 'Welcome',
      message: 'This is an alert message.',
      buttons: ['OK', 'Cancel']
    });

    await alert.present();
  }
}
