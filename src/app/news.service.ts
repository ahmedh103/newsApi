import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Observable}  from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class NewsService {

  constructor(public http: HttpClient) { 








  }



  getEgybtNews():Observable<any>{


return this.http.get('https://newsapi.org/v2/top-headlines?country=eg&apiKey=0908f05a81254171a3451d32717de106');
  }

getUsaNews():Observable<any>{

  return this.http.get('https://newsapi.org/v2/top-headlines?country=us&apiKey=0908f05a81254171a3451d32717de106'); 


}
}
