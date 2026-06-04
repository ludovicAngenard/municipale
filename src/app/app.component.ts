import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { EnteteComponent } from './features/entete/entete.component';
import { LiensEvitements } from './features/liens-evitements/liens-evitements';
import { PiedDePage } from './features/pied-de-page/pied-de-page';
@Component({
  standalone:true,
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  imports:[
    RouterOutlet,
    EnteteComponent,
    PiedDePage,
    LiensEvitements,
  ]
})
export class AppComponent {
  title = 'municipale';
}
