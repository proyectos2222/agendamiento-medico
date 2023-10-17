import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import {MatButtonModule} from '@angular/material/button';

import {Component} from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';


import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { MatInputModule } from '@angular/material/input'; 

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';


@NgModule({
  declarations: [AppComponent],

  imports: [BrowserModule, 
            IonicModule.forRoot(),
            AppRoutingModule,
            MatInputModule,
            MatButtonModule,
            MatDividerModule 
            
          
          ],



  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
