import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { WorkExperienceComponent } from './work-experience/work-experience.component';
import { EducationComponent } from './education/education.component';
import { SkillsComponent } from './skills/skills.component';
import { LanguagesComponent } from './languages/languages.component';
import { InterestsComponent } from './interests/interests.component';
import { AchievementsComponent } from './achievements/achievements.component';
import { VisibilityService } from './visibility.service';
import { SidebarComponent } from './sidebar/sidebar.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, HeaderComponent, WorkExperienceComponent, EducationComponent, SkillsComponent, 
    LanguagesComponent, InterestsComponent, AchievementsComponent, SidebarComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  isSidebarCollapsed = false;
  visibleSections: { [key: string]: boolean } = {};

  constructor(public visibilityService: VisibilityService) {
    this.visibilityService.visibilityMap$.subscribe(map => {
      this.visibleSections = map;
    });
  }

  toggleSidebar() {
    this.isSidebarCollapsed = !this.isSidebarCollapsed;
    console.log('Sidebar colapsado:', this.isSidebarCollapsed);
  }

  editingComponent: string | null = null;

setEditingComponent(componentName: string) {
  this.editingComponent = componentName;
}

}
