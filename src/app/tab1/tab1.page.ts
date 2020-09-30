import { Component } from '@angular/core';
import { CoingeckoService } from '../services/coingecko-service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  selectedVsCurrency: string = "USD";
  selectedIds: string = "EUR";
  coins: string[];


  constructor(private coingeckoService: CoingeckoService) {
    this.coins = coingeckoService.COINS;
  }

  ngOnInit(){}

  async getData(){
    let data = await this.getCoingeckoInfo();
    return data[0];
  }

  getCoingeckoInfo(){
    return this.coingeckoService.getCurrencyInfo(this.selectedVsCurrency, this.selectedIds).toPromise()
    .then(data => {
      return data;
    })
    .catch(error => {
      return [];
    })
  }

}
