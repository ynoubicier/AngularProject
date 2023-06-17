import { Component, OnInit } from '@angular/core';
import { AppareilService } from '../services/appareil.service';
import { from, Subscription } from 'rxjs';

@Component({
  selector: 'app-appareil-view',
  templateUrl: './appareil-view.component.html',
  styleUrls: ['./appareil-view.component.scss']
})
export class AppareilViewComponent implements OnInit {

  isAuth = false;

  lastUpdate = new Promise(
    (resolve, reject) => {
      const date = new Date();
      setTimeout(
        () => {
          resolve(date);
      },  2000
      );
    }
  )

  appareils: any[];
  appareilSubscription: Subscription;

  //appareilOne = 'Machine à laver';
  //appareilTwo = 'Télévision';
  //appareilThree = 'Ordinateur';
  constructor(private appareilservice: AppareilService) {
    setTimeout(
      () => {
        this.isAuth = true;
    },  4000
    );
  }

  ngOnInit() {
    this.appareilSubscription = this.appareilservice.appareilSubject.subscribe(
      (appareils: any[]) => {
        this.appareils = appareils;
      }
    );
    this.appareilservice.emitAppareilSubject();
  }

  OnAllumer() {
    this.appareilservice.switchOnAll();
  }
  
  OnEteindre() {
    this.appareilservice.switchOffAll();
  }

  onSave() {
    this.appareilservice.saveAppareilsToServer();
  }

  onFetch() {
    this.appareilservice.getAppareilsFromServer();
  }
}
