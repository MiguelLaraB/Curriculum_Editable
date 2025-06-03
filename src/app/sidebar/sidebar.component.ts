import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VisibilityService } from '../visibility.service';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {
  @Input() isCollapsed: boolean = false;
  
  sections = ['achievements', 'interests', 'languages', 'workExperience', 'skills', 'education'];

  constructor(public visibilityService: VisibilityService) {}

  toggleSection(section: string): void {
    this.visibilityService.toggleVisibility(section);
  }

  isEditMode = false;

toggleEditMode() {
  this.isEditMode = !this.isEditMode;
}

selectedSection: string | null = null;

@Output() sectionToEdit = new EventEmitter<string>();

selectSectionToEdit(section: string) {
  this.sectionToEdit.emit(section);
}


}