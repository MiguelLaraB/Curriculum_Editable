import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-edit-panel',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './edit-panel.component.html',
  styleUrl: './edit-panel.component.css'
})
export class EditPanelComponent {
  @Input() section: string | null = null;
  @Input() items: any[] = [];

  deleteItem(index: number) {
    this.items.splice(index, 1);
  }

  addItem() {
    this.items.push({});
  }
}