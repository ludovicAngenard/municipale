import { Component, computed, inject } from '@angular/core';
import { GroupeActionService } from 'src/app/services/groupe-action';
import { EnteteCommune } from 'src/app/shared/entete-commune/entete-commune';

@Component({
  selector: 'app-departement',
  imports: [
    EnteteCommune,
  ],
  templateUrl: './departement.html',
  styleUrl: './departement.scss',
})
export class Departement {
  private groupeActionService = inject(GroupeActionService);

  protected referentCaisse = computed(()=>this.groupeActionService.referentCaisse());
  protected referentReseaux = computed(()=>this.groupeActionService.referentReseaux());
  protected referentRelations = computed(()=>this.groupeActionService.referentRelations());
  protected referentLutte = computed(()=>this.groupeActionService.referentLutte());
  protected referentMateriel = computed(()=>this.groupeActionService.referentMateriel());
  protected correspondant = computed(()=>this.groupeActionService.correspondant());
  protected elue = computed(()=>this.groupeActionService.elue());

  public readonly referentCaisseTitre = this.groupeActionService.referentCaisseTitre;
  public readonly referentReseauxTitre = this.groupeActionService.referentReseauxTitre;
  public readonly referentRelationsTitre = this.groupeActionService.referentRelationsTitre;
  public readonly referentLutteTitre = this.groupeActionService.referentLutteTitre;
  public readonly referentMaterielTitre = this.groupeActionService.referentMaterielTitre;
  public readonly correspondantTitre = this.groupeActionService.correspondantTitre;
  public readonly elueTitre = this.groupeActionService.elueTitre;
}
