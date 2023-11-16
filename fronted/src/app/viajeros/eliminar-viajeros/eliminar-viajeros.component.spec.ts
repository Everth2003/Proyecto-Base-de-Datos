import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EliminarViajerosComponent } from './eliminar-viajeros.component';

describe('EliminarViajerosComponent', () => {
  let component: EliminarViajerosComponent;
  let fixture: ComponentFixture<EliminarViajerosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EliminarViajerosComponent]
    });
    fixture = TestBed.createComponent(EliminarViajerosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
