import { Component, h } from '@stencil/core';

@Component({
  tag: 'component-alert',
  styleUrl: 'alert.css'
})
export class alert {
  open = async () => {
    let alertController = document.querySelector('ion-alert-controller');
    if (!alertController) {
      alertController = document.createElement('ion-alert-controller');
      document.body.appendChild(alertController);
    }
    await alertController.componentOnReady();

    const alert = await alertController.create({
      header: 'Use this lightsaber?',
      message: 'Do you agree to use this lightsaber to do good across the galaxy?',
      buttons: ['Disagree', 'Agree']
    });
    await alert.present();
  }

  render() {
    return [
      <ion-header>
        <ion-toolbar>
          <ion-buttons slot="start">
            <ion-back-button />
          </ion-buttons>
          <ion-title>Alert</ion-title>
        </ion-toolbar>
      </ion-header>,

      <ion-content>
        <ion-button expand="block" onClick={this.open}>Show Alert</ion-button>
      </ion-content>
    ];
  }
}
