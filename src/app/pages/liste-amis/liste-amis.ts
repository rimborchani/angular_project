import { Component } from '@angular/core';

@Component({
  selector: 'app-liste-amis',
  imports: [],
  templateUrl: './liste-amis.html',
  styleUrl: './liste-amis.css',
})
export class ListeAmis {
  list: Profil[];

  constructor() {}

  ngOnInit() {
    this.list = [
      {
        id: 1,
        nom: 'Sami',
        email: 'sami@email.com',
        photo: 'assets/images/user.png'
      },
      {
        id: 2,
        nom: 'Sarra',
        email: 'sarra@email.com',
        photo: 'assets/images/user.png'
      },
      {
        id: 3,
        nom: 'Amine',
        email: 'amine@email.com',
        photo: 'assets/images/user.png'
      }
    ];
  }
}
