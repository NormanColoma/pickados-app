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
  payQty: number;

  ngOnInit(): void {
    this.monthsToBuy = 1;
  }

  monthsToBuyChange(newValue, monthly): void {
    this.monthsToBuy = newValue;
    this.payQty = monthly * newValue;
  }

  follow(followId: string): void{
    this.followEvent.emit(followId);
  }

  goPaypal(): void{
    window.open("https://paypal.me/jarubio/" + this.payQty);
  }
}
