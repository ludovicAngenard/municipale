import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnteteCommune } from './entete-commune';

describe('EnteteCommune', () => {
  let component: EnteteCommune;
  let fixture: ComponentFixture<EnteteCommune>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EnteteCommune]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EnteteCommune);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
