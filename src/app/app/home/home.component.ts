import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { IPost } from 'src/app/core/post.model';
import { WordpressService } from 'src/app/core/wordpress.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  public posts$: Observable<IPost[]>;

  public constructor(
    private route: ActivatedRoute,
    private wordpressService: WordpressService
  ) {
    this.posts$ = this.wordpressService.getPosts();
  }

  public ngOnInit(): void {}
}
