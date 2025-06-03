import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-education',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './education.component.html',
  styleUrl: './education.component.css'
})
export class EducationComponent {

  @Input() isEditing: boolean = false;

  isEditMode = false;
  showNewEducationForm = false;

  education: Array<any> = [];

  newEducation = {
    generation: '',
    career: '',
    school: ''
  };

  ngOnInit(): void {
    this.education = [
      {
        generation: "2017-2020",
        career: "Programming",
        school: "CBTIS No.42",
      },
      {
        generation: "2022-In progress",
        career: "Software Engineering",
        school: "Universidad Veracruzana",
      }
    ];
  }

  toggleEditMode() {
    this.isEditMode = !this.isEditMode;
    this.showNewEducationForm = false; // cerrar form si se sale del modo edición
  }

  deleteEducation(index: number) {
    this.education.splice(index, 1);
  }

  addEducation() {
    const educationCopy = JSON.parse(JSON.stringify(this.newEducation));
    this.education.push(educationCopy);

    // reset formulario
    this.newEducation = {
      generation: '',
      career: '',
      school: ''
    };

    this.showNewEducationForm = false;
  }

}