import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LanguagesComponent } from './languages.component';
import { FormsModule } from '@angular/forms';

describe('LanguagesComponent', () => {
  let component: LanguagesComponent;
  let fixture: ComponentFixture<LanguagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LanguagesComponent, FormsModule]
    }).compileComponents();

    fixture = TestBed.createComponent(LanguagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('debe crear el componente', () => {
    expect(component).toBeTruthy();
  });

  it('inicializa con 2 idiomas', () => {
    expect(component.languages.length).toBe(2);
  });

  it('toggleEditMode alterna el modo edición y oculta el formulario nuevo', () => {
    component.showNewLanguageForm = true;
    component.toggleEditMode();
    expect(component.isEditMode).toBeTrue();
    expect(component.showNewLanguageForm).toBeFalse();

    component.toggleEditMode();
    expect(component.isEditMode).toBeFalse();
  });

  it('agrega un nuevo idioma correctamente', () => {
    component.newLanguage.language = 'Francés';
    component.addLanguage();

    expect(component.languages.length).toBe(3);
    expect(component.languages[2].language).toBe('Francés');
    expect(component.newLanguage.language).toBe('');
    expect(component.showNewLanguageForm).toBeFalse();
  });

  it('elimina un idioma por índice', () => {
    const initialLength = component.languages.length;
    component.deleteLanguage(0);
    expect(component.languages.length).toBe(initialLength - 1);
  });
});