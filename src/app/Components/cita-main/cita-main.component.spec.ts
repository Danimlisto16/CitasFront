import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CitaMainComponent } from './cita-main.component';

describe('CitaMainComponent', () => {
  let component: CitaMainComponent;
  let fixture: ComponentFixture<CitaMainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CitaMainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CitaMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
