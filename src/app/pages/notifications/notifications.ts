
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';



// @ts-ignore
import { Notification } from './notification.model';
@Component({
  selector: 'app-notifications',
  imports: [CommonModule],
  templateUrl: './notifications.html',
  styleUrl: './notifications.css',
})
export class Notifications {

  list: Notification[];
  afficherNotifications: boolean;

  constructor() {}

  ngOnInit() {
    this.list = [
      {
        id: 1,
        message: 'Sami vous a envoyé une demande d\'ami.',
        date: '24/11/2026',
        lu: false
      },
      {
        id: 2,
        message: 'Vous êtes invité à une nouvelle conférence.',
        date: '24/11/2026',
        lu: false
      },
      {
        id: 3,
        message: 'salma a accepté votre demande d\'ami.',
        date: '23/11/2026',
        lu: true
      }
    ];

    this.afficherNotifications = false;
  }

  // Nombre de notifications non lues
  get nombreNotifications(): number {
    return this.list.filter(n => !n.lu).length;
  }

  // Afficher ou masquer les notifications
  afficher() {
    this.afficherNotifications = !this.afficherNotifications;
  }

  // Marquer une notification comme lue
  marquerCommeLu(notif: Notification) {
    notif.lu = true;
  }

}
