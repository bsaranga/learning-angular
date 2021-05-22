import { Component } from '@angular/core';
import { Article } from './article/article.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  articles: Array<Article>;
  
  constructor() {
    this.articles = [
      new Article('Angular', 'https://angular.io', 3),
      new Article('Fullstack', 'https://fullstack.io', 4),
      new Article('React', 'https://reactjs.org', 3)
    ]
  }

  addArticle(title: HTMLInputElement, link: HTMLInputElement){
    
    console.log(`Adding article title: ${title.value} and link: ${link.value}`);

    this.articles.push(new Article(title.value, link.value, 0))

    title.value = "";
    link.value = "";
  }

  sortedArticles(): Array<Article> {
    return this.articles.sort((a: Article, b: Article) => b.getVotes() - a.getVotes())
  }
}
