import { Component, input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'app-section-rejoindre',
  templateUrl: './section-rejoindre.component.html',
  styleUrls: ['./section-rejoindre.component.scss']
})
export class SectionRejoindreComponent {
  public isTitleDisplayed = input<boolean>(false);
}
