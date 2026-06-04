import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RetourHautPage } from './retour-haut-page';

describe('RetourHautPage', () => {
  let component: RetourHautPage;
  let fixture: ComponentFixture<RetourHautPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RetourHautPage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RetourHautPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
