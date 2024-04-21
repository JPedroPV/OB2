import { Component, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrl: './search-bar.component.css'
})
export class SearchBarComponent {
  searchParams : string = '';
  @Output() searchEvent : EventEmitter<string> = new EventEmitter<string>();

  constructor(private router: Router) { }

  performSearch() {
    this.searchEvent.emit(this.searchParams);
  }
}
