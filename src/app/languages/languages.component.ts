import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-languages',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './languages.component.html',
  styleUrl: './languages.component.css'
})
export class LanguagesComponent {
  isEditMode = false;
  showNewLanguageForm = false;

  languages: Array<{ language: string }> = [];

  newLanguage = {
    language: ''
  };

  ngOnInit(): void {
    this.languages = [
      { language: "Español" },
      { language: "Inglés" }
    ];
  }

  toggleEditMode() {
    this.isEditMode = !this.isEditMode;
    this.showNewLanguageForm = false;
  }

  addLanguage() {
    const nuevo = { ...this.newLanguage };
    this.languages.push(nuevo);
    this.newLanguage = { language: '' };
    this.showNewLanguageForm = false;
  }

  deleteLanguage(index: number) {
    this.languages.splice(index, 1);
  }
}