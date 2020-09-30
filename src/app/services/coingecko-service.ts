import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CoinInfo } from '../interfaces/coin-info';

@Injectable({
  providedIn: 'root'
})
export class CoingeckoService {

  COINGECKO_API_URL = "https://api.coingecko.com/api/v3";

  constructor(private httpClient: HttpClient) { }

  getSupportedVsCurrencies(){
    return this.httpClient.get<string[]>(this.COINGECKO_API_URL + "/simple/supported_vs_currencies")
  }

  getCurrencyInfo(vsCurrency: string, ids: string){
    let requestParams = `/coins/markets?vs_currency=${vsCurrency}&ids=${ids}`
    return this.httpClient.get<CoinInfo[]>(this.COINGECKO_API_URL + requestParams);
  }

}
