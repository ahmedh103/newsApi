import { Component, OnInit } from '@angular/core';
import { NewsService } from '../news.service';
@Component({
  selector: 'app-egyptnews',
  templateUrl: './egyptnews.component.html',
  styleUrls: ['./egyptnews.component.css']
})
export class EgyptnewsComponent implements OnInit {
news:object ={};
  constructor(public  serv:NewsService) {

this.serv.getEgybtNews().subscribe((data)=>{


this.news =data.articles;
console.log(this.news);

});







   }

  ngOnInit(): void {
  }

}
