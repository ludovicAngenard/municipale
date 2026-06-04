import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionRejoindreComponent } from './section-rejoindre.component';

describe('SectionRejoindreComponent', () => {
  let component: SectionRejoindreComponent;
  let fixture: ComponentFixture<SectionRejoindreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SectionRejoindreComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SectionRejoindreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
