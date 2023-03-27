import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FtConsumerComponent } from './ft-consumer.component';

describe('FtConsumerComponent', () => {
  let component: FtConsumerComponent;
  let fixture: ComponentFixture<FtConsumerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FtConsumerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FtConsumerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
