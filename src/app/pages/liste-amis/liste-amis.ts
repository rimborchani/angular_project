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
        photo: 'https://png.pngtree.com/png-vector/20231019/ourmid/pngtree-user-profile-avatar-png-image_10211471.png'
      },
      {
        id: 2,
        nom: 'Sarra',
        email: 'sarra@email.com',
        photo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUZ126jfV5AGfpktXWWmTEFgk2RR39k68nIDL2favyjg&s=10'
      },
      {
        id: 3,
        nom: 'Amine',
        email: 'amine@email.com',
        photo: 'https://png.pngtree.com/png-vector/20231019/ourmid/pngtree-user-profile-avatar-png-image_10211469.png'
      }
    ];
  }
}
