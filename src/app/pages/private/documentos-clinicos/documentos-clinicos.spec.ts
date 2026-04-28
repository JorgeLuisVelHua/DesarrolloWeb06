import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocumentosClinicos } from './documentos-clinicos';

describe('DocumentosClinicos', () => {
  let component: DocumentosClinicos;
  let fixture: ComponentFixture<DocumentosClinicos>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DocumentosClinicos],
    }).compileComponents();

    fixture = TestBed.createComponent(DocumentosClinicos);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
