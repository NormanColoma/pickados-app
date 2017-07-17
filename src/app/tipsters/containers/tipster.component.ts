import { Component, OnInit} from '@angular/core';

import { Tipster } from 'app/tipsters/models/tipster';
import { TipstersService } from 'app/tipsters/tipsters.service';

@Component({
    selector: 'tipster',
    templateUrl: './tipster.component.html',
    providers: [TipstersService]
})

export class TipsterComponent implements OnInit{
  tipsters: any[];
  currentTipsters: any[];

  premiumFilter: string;
  sortFilter: string;
  sportFilter: string;
  
  ngOnInit(): void {
    this.premiumFilter = 'All';
    this.sortFilter = 'yield';
    this.sportFilter = 'All';
    this.getTipsters();
  }

  constructor(private tipstersService: TipstersService) { }

  getTipsters(): void {
   this.tipstersService
    .getAll()
    .subscribe((tipsters: any[]) => {
      this.tipsters = tipsters;
      this.currentTipsters = tipsters;
      this.refreshSearch(this.premiumFilter, this.sortFilter, this.sportFilter);
    });
  }

  refreshSearch(premium: string, sort: string, sport: string): void{

    if (premium == 'Premium'){
      if(sport != 'All'){
        this.currentTipsters = this.tipsters.filter(function(elem, index, array) {
            return (elem.Sport === sport && elem.Premium === true);
        });
      }
      else {
        this.currentTipsters = this.tipsters.filter(function(elem, index, array) {
            return (elem.Premium === true);
        });
      }  
    }
    else if (premium == 'Free'){
      if(sport != 'All'){
        this.currentTipsters = this.tipsters.filter(function(elem, index, array) {
            return (elem.Sport === sport && elem.Premium === false);
        });
      }
      else {
        this.currentTipsters = this.tipsters.filter(function(elem, index, array) {
            return (elem.Premium === false);
        });
      }
    }
    else {
      if(sport != 'All'){
           this.currentTipsters = this.tipsters.filter(function(elem, index, array) {
            return (elem.Sport === sport);
        });
      }
    }

    if(sort == 'yield'){
      this.sortByYield();
    }
    else if(sort == 'benefit'){
      this.sortByBenefit();
    } 


    console.log(JSON.stringify(this.currentTipsters));

  }

  filterByPremium(premium: boolean): void {
    this.currentTipsters = this.tipsters.filter(function(elem, index, array) {
            return elem.Premium === premium;
        });
  }

  filterBySport(sport: string): void {
    this.sportFilter = sport;
    this.refreshSearch(this.premiumFilter, this.sortFilter, this.sportFilter);
    this.currentTipsters = this.tipsters.filter(function(elem, index, array) {
        return elem.Sport === sport;
    });
  }

  sortByYield() : void {
    this.currentTipsters.sort((left, right): number => {
    if(left.GetStatsOfTipster.length > 3 && right.GetStatsOfTipster.length > 3){
      if (left.GetStatsOfTipster[3].Yield < right.GetStatsOfTipster[3].Yield) return 1;
      if (left.GetStatsOfTipster[3].Yield > right.GetStatsOfTipster[3].Yield) return -1;
      return 0;
    }
    else if(left.GetStatsOfTipster.length > 3) {
      return -1;
    }
    else if(right.GetStatsOfTipster.length > 3) {
      return 1;
    }
    else 
      return 0;
    })
  }

  sortByBenefit() : void {
    this.currentTipsters.sort((left, right): number => {
    if(left.GetStatsOfTipster.length > 3 && right.GetStatsOfTipster.length > 3){
      if (left.GetStatsOfTipster[3].Benefit < right.GetStatsOfTipster[3].Benefit) return 1;
      if (left.GetStatsOfTipster[3].Benefit > right.GetStatsOfTipster[3].Benefit) return -1;
      return 0;
    }
    else if(left.GetStatsOfTipster.length > 3) {
      return -1;
    }
    else if(right.GetStatsOfTipster.length > 3) {
      return 1;
    }
    else 
      return 0;
    })
  }

  setPremiumFilter(value): void {
    this.premiumFilter = value;
    this.refreshSearch(this.premiumFilter, this.sortFilter, this.sportFilter);
  }

  setSportFilter(newValue): void {
    this.sportFilter = newValue;
    this.refreshSearch(this.premiumFilter, this.sortFilter, this.sportFilter);
  }

  sortBy(newValue) : void {
    this.sortFilter = newValue;
    this.refreshSearch(this.premiumFilter, this.sortFilter, this.sportFilter);
  }
}