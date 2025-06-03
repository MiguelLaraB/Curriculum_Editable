import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-work-experience',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './work-experience.component.html',
  styleUrl: './work-experience.component.css'
})
export class WorkExperienceComponent {

  @Input() isEditing: boolean = false;

  isEditMode = false;
  showNewExperienceForm = false;

  workExperience: Array<any> = [];

  newExperience = {
    fecha: '',
    ubicacion: '',
    puesto: '',
    empresa: '',
    logros: [{ descripcion: '' }]
  };

  ngOnInit(): void {
    this.workExperience = [
      {
        fecha: "2024-2024",
        ubicacion: "Ixtac Ver.",
        puesto: "Estudiante",
        empresa: "UV",
        logros: [
          { descripcion: "Creación de página web de logros" },
          { descripcion: "Conexión y consumo de la API de Steam" }
        ]
      },
      {
        fecha: "2024-2024",
        ubicacion: "Orizaba, Ver.",
        puesto: "Estudiante",
        empresa: "UV",
        logros: [
          { descripcion: "Creación de página web de economía" },
          { descripcion: "Creación de diagramas de casos de uso" }
        ]
      }
    ];
  }

  toggleEditMode() {
    this.isEditMode = !this.isEditMode;
    this.showNewExperienceForm = false; // Cierra el formulario si se cierra el modo edición
  }

  deleteWork(index: number) {
    this.workExperience.splice(index, 1);
  }

  addWorkExperience() {
    const experienciaCopia = JSON.parse(JSON.stringify(this.newExperience));
    this.workExperience.push(experienciaCopia);

    // Resetear formulario
    this.newExperience = {
      fecha: '',
      ubicacion: '',
      puesto: '',
      empresa: '',
      logros: [{ descripcion: '' }]
    };

    this.showNewExperienceForm = false; // Ocultar formulario tras guardar
  }

  addLogro(workIndex: number) {
    this.workExperience[workIndex].logros.push({ descripcion: "" });
  }

  deleteLogro(workIndex: number, logroIndex: number) {
    this.workExperience[workIndex].logros.splice(logroIndex, 1);
  }
}