import { Component, computed, inject, signal } from "@angular/core";
import { Router, RouterLink, RouterLinkActive } from "@angular/router";

@Component({
  standalone: true,
  selector: 'app-entete',
  templateUrl: './entete.component.html',
  styleUrls: ['./entete.component.scss'],
  imports: [
    RouterLink,
    RouterLinkActive
]
})
export class EnteteComponent {
  protected isMenuDisplayed = signal(false);
  protected menuDisplayedClass = computed(()=> this.isMenuDisplayed() ? 'reponsive-menu-open' : '');
  private readonly router = inject(Router)

  onClickMobileMenu(){
    this.isMenuDisplayed.update((isMenuDisplayed)=>!isMenuDisplayed);
  }

  redirectTo(path: string){
    this.router.navigateByUrl('/'+ path)
  }

  toggleDialog(){
    const dialog: any = document.getElementById("entete-tous-les-sites");
    console.log("dialogue : ", dialog)
    if(dialog.open){
      dialog?.close();
    } else{
      dialog?.showModal();
    }
  }
}
