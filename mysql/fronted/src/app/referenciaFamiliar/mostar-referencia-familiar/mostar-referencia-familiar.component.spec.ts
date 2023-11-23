import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MostarReferenciaFamiliarComponent } from './mostar-referencia-familiar.component';

describe('MostarReferenciaFamiliarComponent', () => {
  let component: MostarReferenciaFamiliarComponent;
  let fixture: ComponentFixture<MostarReferenciaFamiliarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MostarReferenciaFamiliarComponent]
    });
    fixture = TestBed.createComponent(MostarReferenciaFamiliarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
