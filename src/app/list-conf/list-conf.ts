import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-list-conf',
  imports: [CommonModule, FormsModule],
  templateUrl: './list-conf.html',
  styleUrl: './list-conf.css',
})
export class ListConf {
  list: Conference[];
  searchTitle: string;
  constructor() {}
  ngOnInit() {
  this.list = [

    {
      id:2,
      title: 'conference angular',
      description: 'web  ',
      date: '23/11/2026',
      nbrMax: 30,
      nbrRevervation: 10,
      picture:
        'https://tse4.mm.bing.net/th/id/OIP.naBZzjkABE_0DXbmAuEhggHaEt?r=0&rs=1&pid=ImgDetMain&o=7&rm=3',
    },

    {
      id:3,
      title: 'conference react',
      description: 'web  dev conference ',
      date: '23/11/2026',
      nbrMax: 30,
      nbrRevervation: 30,
      picture:
        'https://tse4.mm.bing.net/th/id/OIP.llTtOkHCYu9yuqFY2A3CFQHaFL?r=0&rs=1&pid=ImgDetMain&o=7&rm=3',
    },
    {
      id:5,
      title: 'conference react',
      description: 'web  dev conference ',
      date: '25/11/2026',
      nbrMax: 30,
      nbrRevervation: 5,
      picture:
        'https://tse4.mm.bing.net/th/id/OIP.llTtOkHCYu9yuqFY2A3CFQHaFL?r=0&rs=1&pid=ImgDetMain&o=7&rm=3',
    }
    ];
  }
  uppercase: string;
  participate(conf: Conference) {
    conf.nbrRevervation++;
  }
}

