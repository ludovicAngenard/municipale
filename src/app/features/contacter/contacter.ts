import { Component, computed, inject } from '@angular/core';
import { GroupeActionService } from 'src/app/services/groupe-action';
import { EnteteCommune } from 'src/app/shared/entete-commune/entete-commune';
import { SectionRejoindreComponent } from 'src/app/shared/section-rejoindre/section-rejoindre.component';

@Component({
  selector: 'app-contacter',
  imports: [
    EnteteCommune,
    SectionRejoindreComponent,
  ],
  templateUrl: './contacter.html',
  styleUrl: './contacter.scss',
})
export class Contacter {
  //service
  public groupeActionService = inject(GroupeActionService);
  //component
  protected groupesAngers = computed(()=>this.groupeActionService.groupesAngers());
}
