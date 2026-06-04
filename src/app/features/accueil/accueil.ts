import { Component } from '@angular/core';
import { SectionRejoindreComponent } from '../../shared/section-rejoindre/section-rejoindre.component';
import { SectionEnteteComponent } from './component/section-entete/section-entete.component';

@Component({
  selector: 'app-accueil',
  imports: [
    SectionEnteteComponent,
    SectionRejoindreComponent,
  ],
  templateUrl: './accueil.html',
  styleUrl: './accueil.scss',
})
export class Accueil {

}
