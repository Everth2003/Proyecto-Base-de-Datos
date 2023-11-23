import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EliminarReferenciaFamiliarComponent } from './eliminar-referencia-familiar.component';

describe('EliminarReferenciaFamiliarComponent', () => {
  let component: EliminarReferenciaFamiliarComponent;
  let fixture: ComponentFixture<EliminarReferenciaFamiliarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EliminarReferenciaFamiliarComponent]
    });
    fixture = TestBed.createComponent(EliminarReferenciaFamiliarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
