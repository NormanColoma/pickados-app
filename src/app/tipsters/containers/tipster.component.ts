import { Component, OnInit} from '@angular/core';

import { Tipster } from 'app/tipsters/models/tipster';
import { TipstersService } from 'app/tipsters/tipsters.service';

@Component({
    selector: 'tipster',
    templateUrl: './tipster.component.html',
    providers: [TipstersService]
})

export class TipsterComponent implements OnInit{
    tipsters: Tipster[];

  ngOnInit(): void {
    this.getTipsters();
  }

  constructor(private tipstersService: TipstersService) { }

  getTipsters(): void {
   /**this.tipstersService
    .getAll()
    .subscribe((tipsters: Tipster[]) => {
    this.tipsters = tipsters;
    });**/
  }
}
