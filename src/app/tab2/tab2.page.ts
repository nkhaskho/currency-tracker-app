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
  currencies: string[];
  bitcoinInfo: CoinInfo;


  constructor(private coingeckoService: CoingeckoService) {
    this.getVsCurrencies();
  }

  async ngOnInit(){
    this.callCoingeckoService();
    console.log(this.bitcoinInfo);
  }

  async getVsCurrencies(){
    this.currencies = await this.coingeckoService.getSupportedVsCurrencies().toPromise();
  }

  getCoingeckoInfo(){
    return this.coingeckoService.getCurrencyInfo(this.vsCurrency, "bitcoin").toPromise();
  }

  async callCoingeckoService(){
    let data = await this.getCoingeckoInfo();
    this.bitcoinInfo = data[0];
  }

}
