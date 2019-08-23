import { Injectable } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})
export class TitleService {
  private title: string;

  constructor(private title: Title) { }
  
  setTitle(title: string): void {
    this.title.setTitle(title);
  }
  
  getTitle(): string {
    return this.title.getTitle();
  }
}
