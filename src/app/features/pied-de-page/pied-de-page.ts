import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { RetourHautPage } from '../retour-haut-page/retour-haut-page';

@Component({
  standalone:true,
  selector: 'app-pied-de-page',
  templateUrl: './pied-de-page.html',
  styleUrl: './pied-de-page.scss',
  imports: [
    RouterLink,
    RetourHautPage,
  ],
})
export class PiedDePage {

}
