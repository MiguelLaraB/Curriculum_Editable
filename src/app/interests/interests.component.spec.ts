import { ComponentFixture, TestBed } from '@angular/core/testing';
import { InterestsComponent } from './interests.component';
import { FormsModule } from '@angular/forms';

describe('InterestsComponent', () => {
  let component: InterestsComponent;
  let fixture: ComponentFixture<InterestsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InterestsComponent, FormsModule]
    }).compileComponents();

    fixture = TestBed.createComponent(InterestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('debe crear el componente', () => {
    expect(component).toBeTruthy();
  });

  it('inicializa con 5 intereses', () => {
    expect(component.interests.length).toBe(5);
  });

  it('toggleEditMode alterna el modo edición y oculta el formulario nuevo', () => {
    component.showNewInterestForm = true;
    component.toggleEditMode();
    expect(component.isEditMode).toBeTrue();
    expect(component.showNewInterestForm).toBeFalse();

    component.toggleEditMode();
    expect(component.isEditMode).toBeFalse();
  });

  it('agrega un interés válido correctamente', () => {
    component.newInterest.interest = 'Nuevo interés';
    component.addInterest();

    expect(component.interests.some(i => i.interest === 'Nuevo interés')).toBeTrue();
    expect(component.newInterest.interest).toBe('');
    expect(component.showNewInterestForm).toBeFalse();
  });

  it('no agrega un interés vacío o solo espacios', () => {
    component.newInterest.interest = '   ';
    const initialLength = component.interests.length;
    component.addInterest();
    expect(component.interests.length).toBe(initialLength);
  });

  it('elimina un interés por índice', () => {
    const initialLength = component.interests.length;
    component.deleteInterest(0);
    expect(component.interests.length).toBe(initialLength - 1);
  });
});