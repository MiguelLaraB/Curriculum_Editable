import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-interests',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './interests.component.html',
  styleUrl: './interests.component.css'
})
export class InterestsComponent {
  isEditMode = false;
  showNewInterestForm = false;

  interests: Array<{ interest: string }> = [];

  newInterest = {
    interest: ''
  };

  ngOnInit(): void {
  
    this.interests = [
      { interest: "Videojuegos" },
      { interest: "Escuchar música" },
      { interest: "Leer" },
      { interest: "Cocinar" },
      { interest: "Diseñar páginas web" }
    ];
  }

  toggleEditMode() {
    this.isEditMode = !this.isEditMode;
    this.showNewInterestForm = false;
  }

  addInterest() {
    if (this.newInterest.interest.trim().length > 0) {
      this.interests.push({ interest: this.newInterest.interest.trim() });
      this.newInterest.interest = '';
      this.showNewInterestForm = false;
    }
  }

  deleteInterest(index: number) {
    this.interests.splice(index, 1);
  }
}
