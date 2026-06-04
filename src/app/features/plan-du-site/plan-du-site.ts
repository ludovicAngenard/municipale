import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { EnteteCommune } from 'src/app/shared/entete-commune/entete-commune';

@Component({
  selector: 'app-plan-du-site',
  imports: [
    RouterLinkActive,
    EnteteCommune,
    RouterLink,
  ],
  templateUrl: './plan-du-site.html',
  styleUrl: './plan-du-site.scss',
})
export class PlanDuSite {

}
