import { Component, input } from '@angular/core';

@Component({
  selector: 'app-entete-commune',
  imports: [],
  templateUrl: './entete-commune.html',
  styleUrl: './entete-commune.scss',
})
export class EnteteCommune {
  public title = input.required<string>();
  public subtitle = input<string>();
}
