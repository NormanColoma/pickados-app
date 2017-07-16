import { Component, EventEmitter, Input, Output } from '@angular/core';
// import { Post} from 'app/posts-dashboard/services/post';

@Component({
  selector: 'search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.css']
})
export class SearchFormComponent {
  @Input() sortFilter: string;
  @Input() premiumFilter: string;
  @Input() sportFilter: string;

  @Output() sortChangeEvent = new EventEmitter();
  @Output() premiumFilterEvent = new EventEmitter();
  @Output() sportChangeEvent = new EventEmitter();

  sortChange(newValue) {
    this.sortChangeEvent.emit(newValue);
  }

  sportChange(newValue){
    this.sportChangeEvent.emit(newValue);
  }

  premiumFilterChange(newValue) {
    this.premiumFilterEvent.emit(newValue);
  }

  setPremiumFilter(e: string): void {
    this.premiumFilterEvent.emit(e);
  }


}