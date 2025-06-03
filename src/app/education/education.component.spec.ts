import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EducationComponent } from './education.component';
import { FormsModule } from '@angular/forms';

describe('EducationComponent', () => {
  let component: EducationComponent;
  let fixture: ComponentFixture<EducationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EducationComponent, FormsModule]
    }).compileComponents();

    fixture = TestBed.createComponent(EducationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('debe crear el componente', () => {
    expect(component).toBeTruthy();
  });

  it('inicializa con 2 educaciones', () => {
    expect(component.education.length).toBe(2);
  });

  it('toggleEditMode alterna el modo edición y oculta el formulario nuevo', () => {
    component.showNewEducationForm = true;
    component.toggleEditMode();
    expect(component.isEditMode).toBeTrue();
    expect(component.showNewEducationForm).toBeFalse();

    component.toggleEditMode();
    expect(component.isEditMode).toBeFalse();
  });

  it('agrega una nueva educación correctamente', () => {
    component.newEducation = {
      generation: '2020-2023',
      career: 'Ingeniería Civil',
      school: 'IPN'
    };

    component.addEducation();

    expect(component.education.length).toBe(3);
    expect(component.education[2]).toEqual({
      generation: '2020-2023',
      career: 'Ingeniería Civil',
      school: 'IPN'
    });

    expect(component.newEducation).toEqual({
      generation: '',
      career: '',
      school: ''
    });
    expect(component.showNewEducationForm).toBeFalse();
  });

  it('elimina una educación por índice', () => {
    const initialLength = component.education.length;
    component.deleteEducation(0);
    expect(component.education.length).toBe(initialLength - 1);
  });
});
