import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CoinInfo } from '../interfaces/coin-info';

@Injectable({
  providedIn: 'root'
})
export class CoingeckoService {

  COINGECKO_API_URL = "https://api.coingecko.com/api/v3/coins/markets";

  COINS = ["usd", "eur", "gpb"];

  constructor(private httpClient: HttpClient) { }

  getCurrencyInfo(vsCurrency: string, ids: string){
    let requestParams = `?vs_currency=${vsCurrency}&ids=${ids}`
    return this.httpClient.get<CoinInfo[]>(this.COINGECKO_API_URL+requestParams);
  }

}
