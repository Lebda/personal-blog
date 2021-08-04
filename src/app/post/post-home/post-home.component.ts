import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IPost } from 'src/app/core/post.model';
import { WordpressService } from 'src/app/core/wordpress.service';

@Component({
  selector: 'app-post-home',
  templateUrl: './post-home.component.html',
  styleUrls: ['./post-home.component.scss'],
})
export class PostHomeComponent implements OnInit {
  public post: IPost | undefined;

  public constructor(
    private route: ActivatedRoute,
    private wordpressService: WordpressService
  ) {
    this.wordpressService.post$.subscribe((data) => {
      this.post = data;
    });
  }

  public ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.wordpressService.getPost(params.id);
    });
  }
}
