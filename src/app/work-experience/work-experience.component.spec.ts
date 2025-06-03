import { ComponentFixture, TestBed } from '@angular/core/testing';
import { WorkExperienceComponent } from './work-experience.component';
import { FormsModule } from '@angular/forms';

describe('WorkExperienceComponent', () => {
  let component: WorkExperienceComponent;
  let fixture: ComponentFixture<WorkExperienceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [WorkExperienceComponent, FormsModule]
    });
    fixture = TestBed.createComponent(WorkExperienceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('debería contener experiencias iniciales', () => {
    expect(component.workExperience.length).toBeGreaterThan(0);
  });

  it('debería añadir una nueva experiencia', () => {
    component.newExperience = {
      fecha: '2025',
      ubicacion: 'Testlandia',
      puesto: 'Dev',
      empresa: 'Test Corp',
      logros: [{ descripcion: 'Logro de prueba' }]
    };
    component.addWorkExperience();
    expect(component.workExperience.some(e => e.empresa === 'Test Corp')).toBeTrue();
  });

  it('debería eliminar una experiencia', () => {
    const inicial = component.workExperience.length;
    component.deleteWork(0);
    expect(component.workExperience.length).toBe(inicial - 1);
  });

  it('debería añadir un logro a una experiencia', () => {
    component.addLogro(0);
    expect(component.workExperience[0].logros.length).toBeGreaterThan(2);
  });

  it('debería eliminar un logro de una experiencia', () => {
    const inicial = component.workExperience[0].logros.length;
    component.deleteLogro(0, 0);
    expect(component.workExperience[0].logros.length).toBe(inicial - 1);
  });
});