import { Component, input, signal } from '@angular/core';
import { Theme } from '../../theme';

@Component({
  selector: 'app-accordeon',
  imports: [],
  templateUrl: './accordeon.html',
  styleUrl: './accordeon.scss',
})
export class Accordeon {
  public theme = input.required<Theme>();
  protected isDisplayed = signal(false);
  toggleDisplayedContent(){
    this.isDisplayed.update((isDisplayed)=> !isDisplayed)
  }
}
