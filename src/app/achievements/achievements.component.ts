import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-achievements',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './achievements.component.html',
  styleUrl: './achievements.component.css'
})
export class AchievementsComponent {
  isEditMode = false;
  showNewAchievementForm = false;

  achievements: Array<any> = [];

  newAchievement = {
    achievement: ''
  };

  ngOnInit(): void {
    this.achievements = [
      { achievement: "Página web de logros de videojuegos" },
      { achievement: "Platino de Fallout New Vegas" }
    ];
  }

  toggleEditMode() {
    this.isEditMode = !this.isEditMode;
    this.showNewAchievementForm = false;
  }

  addAchievement() {
    const nuevo = { ...this.newAchievement };
    this.achievements.push(nuevo);
    this.newAchievement = { achievement: '' };
    this.showNewAchievementForm = false;
  }

  deleteAchievement(index: number) {
    this.achievements.splice(index, 1);
  }
}