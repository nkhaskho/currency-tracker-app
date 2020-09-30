import { Component } from '@angular/core';
import { CoinInfo } from '../interfaces/coin-info';
import { CoingeckoService } from '../services/coingecko-service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  vsCurrency: string = "USD";
  coins: string[];
  bitcoinInfo: CoinInfo;


  constructor(private coingeckoService: CoingeckoService) {
    this.coins = coingeckoService.COINS;
  }

  async ngOnInit(){
    this.callCoingeckoService();
    console.log(this.bitcoinInfo);
  }

  getCoingeckoInfo(){
    return this.coingeckoService.getCurrencyInfo(this.vsCurrency, "bitcoin").toPromise();
  }

  async callCoingeckoService(){
    let data = await this.getCoingeckoInfo();
    this.bitcoinInfo = data[0];
  }

}
