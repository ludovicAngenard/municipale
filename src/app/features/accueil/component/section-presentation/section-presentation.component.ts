import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  standalone:true,
  selector: 'app-section-presentation',
  templateUrl: './section-presentation.component.html',
  styleUrls: ['./section-presentation.component.scss'],
  imports:[RouterLink]
})
export class SectionPresentationComponent {

}
