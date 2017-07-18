import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';
// import { Post} from 'app/posts-dashboard/services/post';

@Component({
  selector: 'tipster-detail',
  templateUrl: './tipster-detail.component.html',
  styleUrls: ['./tipster-detail.component.css']
})
export class TipsterDetailComponent implements OnInit {
  @Input() tipster: any;
  @Input() followed: boolean;
  @Output() followEvent = new EventEmitter();

  monthsToBuy: number;

  ngOnInit(): void {
    this.monthsToBuy = 1;
  }

  monthsToBuyChange(newValue): void {
    this.monthsToBuy = newValue;
  }

  follow(followId: string): void{
    this.followEvent.emit(followId);
  }
}
