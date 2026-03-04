import { Component, computed, HostListener, inject, OnInit, signal } from "@angular/core"
import { Router, RouterLink } from "@angular/router"

@Component({
  standalone: true,
  selector: 'app-entete',
  templateUrl: './entete.component.html',
  styleUrls: ['./entete.component.scss'],
  imports:[
    RouterLink,
  ]
})
export class EnteteComponent {
  protected isMenuDisplayed = signal(false)
  protected menuDisplayedClass = computed(()=> this.isMenuDisplayed() ? 'responsive' : '')
  public test = 'azy'
  public testsign = 0

  private readonly router = inject(Router)

@HostListener("window:scroll", [])
onWindowScroll() {
 //we'll do some stuff here when the window is scrolled
 const header = document.getElementsByTagName('header')[0];
 if(globalThis.scrollY > 2 && !header.classList.contains('scrolled')){
    header.classList += ' scrolled';
 } else if (globalThis.scrollY <= 2 && header.classList.contains('scrolled')){
    header.classList.remove('scrolled');
 }
}

  onClickMobileMenu(){
    this.isMenuDisplayed.update((isMenuDisplayed)=>!isMenuDisplayed);
    console.log( "isMenuDisplayed : ",this.isMenuDisplayed())
  }

  redirectTo(path: string){
    this.router.navigateByUrl('/'+ path)
  }
}
