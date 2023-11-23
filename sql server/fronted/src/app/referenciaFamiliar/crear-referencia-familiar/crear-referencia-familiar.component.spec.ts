import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearReferenciaFamiliarComponent } from './crear-referencia-familiar.component';

describe('CrearReferenciaFamiliarComponent', () => {
  let component: CrearReferenciaFamiliarComponent;
  let fixture: ComponentFixture<CrearReferenciaFamiliarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CrearReferenciaFamiliarComponent]
    });
    fixture = TestBed.createComponent(CrearReferenciaFamiliarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
