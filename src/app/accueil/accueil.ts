import { Component } from '@angular/core';
import { EnteteComponent } from '../entete/entete.component';
import { SectionEnteteComponent } from './component/section-entete/section-entete.component';
import { SectionPresentationComponent } from './component/section-presentation/section-presentation.component';
import { SectionRejoindreComponent } from './component/section-rejoindre/section-rejoindre.component';

@Component({
  selector: 'app-accueil',
  imports: [
    SectionEnteteComponent,
    SectionPresentationComponent,
    SectionRejoindreComponent,
  ],
  templateUrl: './accueil.html',
  styleUrl: './accueil.scss',
})
export class Accueil {

}
