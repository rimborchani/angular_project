import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule } from '@angular/forms';
import { ListConf } from '../list-conf/list-conf';
import { ProfilUtilisateur } from '../profil-utilisateur/profil-utilisateur';
import { Notifications } from '../notifications/notifications';
import { ListeAmis } from '../liste-amis/liste-amis';


@Component({
  selector: 'app-home',
  imports: [CommonModule, ListConf, FormsModule, ProfilUtilisateur, Notifications, ListeAmis],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  //cycle de vie d'un composant
  list: Conference[];
  searchTitle: string;
  constructor() {}
  //2
  ngOnInit() {
    this.list = [
      {
        id: 2,
        title: 'conference angular',
        description: 'web  ',
        date: '23/11/2026',
        nbrMax: 30,
        nbrRevervation: 10,
        picture:
          'https://tse4.mm.bing.net/th/id/OIP.naBZzjkABE_0DXbmAuEhggHaEt?r=0&rs=1&pid=ImgDetMain&o=7&rm=3',
      },

      {
        id: 3,
        title: 'conference react',
        description: 'web  dev conference ',
        date: '23/11/2026',
        nbrMax: 30,
        nbrRevervation: 30,
        picture:
          'https://tse4.mm.bing.net/th/id/OIP.llTtOkHCYu9yuqFY2A3CFQHaFL?r=0&rs=1&pid=ImgDetMain&o=7&rm=3',
      },
      {
        id: 5,
        title: 'conference react',
        description: 'web  dev conference ',
        date: '25/11/2026',
        nbrMax: 30,
        nbrRevervation: 5,
        picture:
          'https://tse4.mm.bing.net/th/id/OIP.llTtOkHCYu9yuqFY2A3CFQHaFL?r=0&rs=1&pid=ImgDetMain&o=7&rm=3',
      },
    ];
  }

  /* title: string = 'Home Page';
  enable: boolean = false;

  change() {
    this.title = '4DAS10';
    this.enable = true;
  }*/
  uppercase: string;
  participate(conf: Conference) {
    conf.nbrRevervation++;
  }
}
