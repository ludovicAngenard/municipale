import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Contacter } from './contacter';

describe('Contacter', () => {
  let component: Contacter;
  let fixture: ComponentFixture<Contacter>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Contacter]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Contacter);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
