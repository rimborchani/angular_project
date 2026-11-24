import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Home } from './pages/home/home';
import { Footer } from './sharedComposent/footer/footer';
import { Header } from './sharedComposent/header/header';

@Component({
  selector: 'app-root',
  imports: [ Home, Footer, Header],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('project');
}
