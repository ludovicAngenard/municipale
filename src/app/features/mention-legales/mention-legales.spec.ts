import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MentionLegales } from './mention-legales';

describe('MentionLegales', () => {
  let component: MentionLegales;
  let fixture: ComponentFixture<MentionLegales>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MentionLegales]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MentionLegales);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
