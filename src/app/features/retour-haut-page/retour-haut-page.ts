import { Component } from '@angular/core';

@Component({
  selector: 'app-retour-haut-page',
  imports: [],
  templateUrl: './retour-haut-page.html',
  styleUrl: './retour-haut-page.scss',
})
export class RetourHautPage {
  goToTop(){
    globalThis.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
