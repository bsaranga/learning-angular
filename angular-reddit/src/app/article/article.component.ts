import { Component, OnInit, HostBinding, Input } from '@angular/core';
import { Article } from './article.model';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {

  @Input() article?: Article;
  @HostBinding('attr.class') cssClass = 'backgroundCol';

  hovered: boolean = false;

  ngOnInit(): void {
  }

  voteUp() {
    this.article?.voteUp();
    return false;
  }

  voteDown() {
    this.article?.voteDown();
    return false;
  }

  onHover() {
    this.hovered = !this.hovered;
  }

}
