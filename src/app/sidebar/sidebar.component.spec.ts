import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SidebarComponent } from './sidebar.component';
import { VisibilityService } from '../visibility.service';

describe('SidebarComponent', () => {
  let component: SidebarComponent;
  let fixture: ComponentFixture<SidebarComponent>;
  let visibilityService: VisibilityService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SidebarComponent],
      providers: [VisibilityService],
    }).compileComponents();

    fixture = TestBed.createComponent(SidebarComponent);
    component = fixture.componentInstance;
    visibilityService = TestBed.inject(VisibilityService);
    fixture.detectChanges();
  });

  it('debe crearse el componente', () => {
    expect(component).toBeTruthy();
  });

  it('debe alternar la visibilidad de una sección', () => {
    const toggleSpy = spyOn(visibilityService, 'toggleVisibility');
    component.toggleSection('languages');
    expect(toggleSpy).toHaveBeenCalledWith('languages');
  });

  it('debe alternar el modo de edición', () => {
    component.isEditMode = false;
    component.toggleEditMode();
    expect(component.isEditMode).toBeTrue();
  });

  it('debe emitir un evento al seleccionar una sección para editar', () => {
    spyOn(component.sectionToEdit, 'emit');
    component.selectSectionToEdit('education');
    expect(component.sectionToEdit.emit).toHaveBeenCalledWith('education');
  });
});