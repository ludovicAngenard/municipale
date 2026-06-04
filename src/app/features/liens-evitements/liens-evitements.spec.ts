import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LiensEvitements } from './liens-evitements';

describe('LiensEvitements', () => {
  let component: LiensEvitements;
  let fixture: ComponentFixture<LiensEvitements>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LiensEvitements]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LiensEvitements);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
