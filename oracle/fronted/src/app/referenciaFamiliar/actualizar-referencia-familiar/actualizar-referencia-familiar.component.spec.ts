import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActualizarReferenciaFamiliarComponent } from './actualizar-referencia-familiar.component';

describe('ActualizarReferenciaFamiliarComponent', () => {
  let component: ActualizarReferenciaFamiliarComponent;
  let fixture: ComponentFixture<ActualizarReferenciaFamiliarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ActualizarReferenciaFamiliarComponent]
    });
    fixture = TestBed.createComponent(ActualizarReferenciaFamiliarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
