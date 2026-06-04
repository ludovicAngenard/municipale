import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Pogramme } from './pogramme';

describe('Pogramme', () => {
  let component: Pogramme;
  let fixture: ComponentFixture<Pogramme>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Pogramme]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Pogramme);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
