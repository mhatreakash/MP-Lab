import { ToastController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'feedback',
  templateUrl: './feedback.page.html',
  styleUrls: ['./feedback.page.scss'],
})
export class FeedbackPage implements OnInit {
  username;
  constructor(public toastController: ToastController) { }

  ngOnInit() {
  }
  async showToast() {
    const toast = await this.toastController.create({
      color: "success",
      message: `Thank you for the feedback, ${this.username}!`,
      duration: 2000
    });
    toast.present();
  }
}
