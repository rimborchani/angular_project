import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-profil-utilisateur',
  imports: [CommonModule],
  templateUrl: './profil-utilisateur.html',
  styleUrl: './profil-utilisateur.css',
})
export class ProfilUtilisateur {
  list: Profil[];
  constructor() {}
  ngOnInit() {
    this.list = [{
      id: 1,
      nom: 'Ahmed',
      email: 'ahmed@email.com',
      photo: 'assets/images/user.png'
    }];

    console.log(this.list);
  }
}
