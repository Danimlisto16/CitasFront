import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PanelmedicoComponent } from './panelmedico.component';

describe('PanelmedicoComponent', () => {
  let component: PanelmedicoComponent;
  let fixture: ComponentFixture<PanelmedicoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PanelmedicoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PanelmedicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
