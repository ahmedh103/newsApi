import { Component, OnInit } from '@angular/core';
import { NewsService } from '../news.service';

@Component({
  selector: 'app-usanews',
  templateUrl: './usanews.component.html',
  styleUrls: ['./usanews.component.css']
})
export class UsanewsComponent implements OnInit {

  news:object ={};
  constructor(public  serv:NewsService) {

this.serv.getUsaNews().subscribe((data)=>{


this.news =data.articles;
console.log(this.news);

});}


  ngOnInit(): void {
  }

}
