import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-list-conf',
  imports: [CommonModule],
  templateUrl: './list-conf.html',
  styleUrl: './list-conf.css'
})
export class ListConf {

  conferences = [
    {
      id: 1,
      picture: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87',
      title: 'AI & Machine Learning Conference',
      date: '20 Novembre 2026',
      address: 'Tunis, Tunisie',
      available_places: 25
    },
    {
      id: 2,
      picture: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4',
      title: 'Web Development Summit',
      date: '25 Novembre 2026',
      address: 'Sousse, Tunisie',
      available_places: 12
    },
    {
      id: 3,
      picture: 'https://images.unsplash.com/photo-1505373877841-8d25f7d46678',
      title: 'Big Data & Cloud Conference',
      date: '10 Décembre 2026',
      address: 'Sfax, Tunisie',
      available_places: 0
    },
    {
      id: 4,
      picture: 'https://images.unsplash.com/photo-1475721027785-f74eccf877e2',
      title: 'Cybersecurity Forum',
      date: '15 Décembre 2026',
      address: 'Tunis, Tunisie',
      available_places: 18
    }
  ];

}
