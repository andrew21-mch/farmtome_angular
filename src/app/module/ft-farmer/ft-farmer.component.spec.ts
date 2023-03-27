import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FtFarmerComponent } from './ft-farmer.component';

describe('FtFarmerComponent', () => {
  let component: FtFarmerComponent;
  let fixture: ComponentFixture<FtFarmerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FtFarmerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FtFarmerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
