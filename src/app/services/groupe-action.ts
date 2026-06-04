import { HttpClient } from "@angular/common/http";
import { computed, inject, Injectable } from "@angular/core";
import { toSignal } from '@angular/core/rxjs-interop';
import { IGroupeAction } from "../models/groupe-action";
import { Referent } from "../models/referent";

@Injectable({providedIn: 'root'})
export class GroupeActionService {
    public readonly referentCaisseTitre = "Gestion de la caisse"
    public readonly referentReseauxTitre = "Gestion de l'animation/réseaux";
    public readonly referentRelationsTitre = "Gestion des relations unitaires";
    public readonly referentLutteTitre = "Suivi des luttes";
    public readonly referentMaterielTitre = "Gestion du matériel";
    public readonly correspondantTitre = "Correspondant départemental";
    public readonly elueTitre = "Elue département";

    private http = inject(HttpClient);
    private groupes = toSignal(this.http.get<IGroupeAction[]>("/assets/json/ga.json"));
    public groupesAngers = computed(()=>
        this.groupes()
        ?.filter((g: IGroupeAction)=> g.ville === "Angers")
        .sort((a, b) => a.nom.localeCompare(b.nom)));

    private referents = toSignal(this.http.get<Referent[]>("/assets/json/referents.json"));
    public referentCaisse = computed(()=>this.referents()?.filter((r)=> r.titre === this.referentCaisseTitre));
    public referentReseaux = computed(()=>this.referents()?.filter((r)=> r.titre === this.referentReseauxTitre));
    public referentRelations = computed(()=>this.referents()?.filter((r)=> r.titre === this.referentRelationsTitre));
    public referentLutte = computed(()=>this.referents()?.filter((r)=> r.titre === this.referentLutteTitre));
    public referentMateriel = computed(()=>this.referents()?.filter((r)=> r.titre === this.referentMaterielTitre));
    public correspondant = computed(()=>this.referents ()?.filter((r)=> r.titre === this.correspondantTitre));
    public elue = computed(()=>this.referents()?.filter((r)=> r.titre === this.elueTitre));

}