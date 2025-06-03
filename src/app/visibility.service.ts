import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class VisibilityService {
  private visibilityMapSubject = new BehaviorSubject<{ [key: string]: boolean }>({
    workExperience: true,
    education: true,
    skills: true,
    achievements: true,
    languages: true,
    interests: true
  });

  visibilityMap$ = this.visibilityMapSubject.asObservable();

  toggleVisibility(section: string): void {
    const currentMap = this.visibilityMapSubject.getValue();
    const updatedMap = {
      ...currentMap,
      [section]: !currentMap[section]
    };
    this.visibilityMapSubject.next(updatedMap);
  }

}