import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.css'
})
export class SkillsComponent implements OnInit {
  skills: Array<{ descripcion: string }> = [];
  isEditMode = false;
  showNewSkillForm = false;

  newSkill = {
    descripcion: ''
  };

  ngOnInit(): void {
    this.skills = [
      { descripcion: "Good critical thought" },
      { descripcion: "Future focused" },
      { descripcion: "Persistence" },
      { descripcion: "Web design" }
    ];
  }

  toggleEditMode() {
    this.isEditMode = !this.isEditMode;
    this.showNewSkillForm = false;
  }

  deleteSkill(index: number) {
    this.skills.splice(index, 1);
  }

  addSkill() {
    const skillCopy = { ...this.newSkill };
    this.skills.push(skillCopy);
    this.newSkill.descripcion = '';
    this.showNewSkillForm = false;
  }
}