import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {


    async presentAlert() {
      const alert = await this.alertController.create({
        header: 'Bienvenido a SimedGalenos!',
        message: this.ValorEnviar.usuario,
        buttons: ['OK']
      });
    
      await alert.present();
    }
  InputHoldplace = "Ingrese Usuario";

  ValorEnviar={
    usuario:"",
    password:""
  }
  constructor(private router: Router, private alertController: AlertController) { }

  ngOnInit() {
  }

  ingresar(){
    let navigationExtras: NavigationExtras = {
      state: {
        ValorEnviar: this.ValorEnviar 
      }
    };
    this.router.navigate(['home'],navigationExtras); 
  }

}
