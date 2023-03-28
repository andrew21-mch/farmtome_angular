import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FtAuthComponent } from './ft-auth.component';

describe('FtAuthComponent', () => {
  let component: FtAuthComponent;
  let fixture: ComponentFixture<FtAuthComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FtAuthComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FtAuthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
