import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListConf } from '../../list-conf/list-conf';


@Component({
  selector: 'app-home',
  imports: [CommonModule, ListConf],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {

  title: string = 'Home Page';
  enable: boolean = false;

  change() {
    this.title = '4DAS10';
    this.enable = true;
  }
}
