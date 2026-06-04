import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Accordeon } from './accordeon';

describe('Accordeon', () => {
  let component: Accordeon;
  let fixture: ComponentFixture<Accordeon>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Accordeon]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Accordeon);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
