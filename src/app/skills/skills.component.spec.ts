import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SkillsComponent } from './skills.component';
import { FormsModule } from '@angular/forms';

describe('SkillsComponent', () => {
  let component: SkillsComponent;
  let fixture: ComponentFixture<SkillsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [SkillsComponent, FormsModule]
    });
    fixture = TestBed.createComponent(SkillsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('debería mostrar la lista inicial de habilidades', () => {
    expect(component.skills.length).toBeGreaterThan(0);
  });

  it('debería añadir una nueva habilidad', () => {
    component.newSkill.descripcion = 'Angular';
    component.addSkill();
    expect(component.skills.some(s => s.descripcion === 'Angular')).toBeTrue();
  });

  it('debería eliminar una habilidad', () => {
    const inicial = component.skills.length;
    component.deleteSkill(0);
    expect(component.skills.length).toBe(inicial - 1);
  });
});