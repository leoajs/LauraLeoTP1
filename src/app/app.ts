import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Footer } from "./footer/footer";
import { Header } from './header/header';
import { Body } from './body/body';

@Component({
  imports: [RouterOutlet, Header, Footer, Body],
  selector: 'app-root',
  styleUrl: './app.scss',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('LauraLeoTP1');
  public headerColor = 'violet';
}
