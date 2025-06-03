import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AchievementsComponent } from './achievements.component';
import { FormsModule } from '@angular/forms';

describe('AchievementsComponent', () => {
  let component: AchievementsComponent;
  let fixture: ComponentFixture<AchievementsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AchievementsComponent, FormsModule]
    }).compileComponents();

    fixture = TestBed.createComponent(AchievementsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('debe crear el componente', () => {
    expect(component).toBeTruthy();
  });

  it('inicializa con 2 logros', () => {
    expect(component.achievements.length).toBe(2);
  });

  it('toggleEditMode alterna el modo edición y oculta el formulario nuevo', () => {
    component.showNewAchievementForm = true;
    component.toggleEditMode();
    expect(component.isEditMode).toBeTrue();
    expect(component.showNewAchievementForm).toBeFalse();

    component.toggleEditMode();
    expect(component.isEditMode).toBeFalse();
  });

  it('agrega un nuevo logro correctamente', () => {
    component.newAchievement.achievement = 'Nuevo logro de prueba';
    component.addAchievement();

    expect(component.achievements.length).toBe(3);
    expect(component.achievements[2].achievement).toBe('Nuevo logro de prueba');
    expect(component.newAchievement.achievement).toBe('');
    expect(component.showNewAchievementForm).toBeFalse();
  });

  it('elimina un logro por índice', () => {
    const initialLength = component.achievements.length;
    component.deleteAchievement(0);
    expect(component.achievements.length).toBe(initialLength - 1);
  });
});