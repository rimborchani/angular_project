import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-profil-utilisateur',
  imports: [CommonModule],
  templateUrl: './profil-utilisateur.html',
  styleUrls: ['./profil-utilisateur.css'],
})
export class ProfilUtilisateur {
  list: Profil[];
  constructor() {}
  ngOnInit() {
    this.list = [{
      id: 1,
      nom: 'rim',
      email: 'rimborchani@esprit.tn',
      photo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUZ126jfV5AGfpktXWWmTEFgk2RR39k68nIDL2favyjg&s=10'
    }];

    console.log(this.list);
  }
}
