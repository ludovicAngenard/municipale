import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionEnteteComponent } from './section-entete.component';

describe('SectionEnteteComponent', () => {
  let component: SectionEnteteComponent;
  let fixture: ComponentFixture<SectionEnteteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SectionEnteteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SectionEnteteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
