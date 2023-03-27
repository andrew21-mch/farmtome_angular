import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FtProfessionalComponent } from './ft-professional.component';

describe('FtProfessionalComponent', () => {
  let component: FtProfessionalComponent;
  let fixture: ComponentFixture<FtProfessionalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FtProfessionalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FtProfessionalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
