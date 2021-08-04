import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject, Observable, of } from 'rxjs';
import { environment } from 'src/environments/environment';
import { tap } from 'rxjs/operators';
import { IPost } from './post.model';
const POSTS_URL = 'posts';

@Injectable({
  providedIn: 'root',
})
export class WordpressService {
  private posts: Array<IPost> | undefined;
  public post$: Subject<IPost> = new Subject();

  public constructor(private http: HttpClient) {}

  public getPosts(): Observable<IPost[]> {
    if (this.posts) {
      return of(this.posts);
    }
    return this.http
      .get<IPost[]>(`${environment.WORDPRESS_REST_URL}${POSTS_URL}`)
      .pipe(tap((posts) => (this.posts = posts)));
  }

  public getPost(id: number): void {
    if (this.posts) {
      const post = this.posts.find((p) => p.id === id);
      if (post) {
        this.post$.next(post);
      }
    }

    this.http
      .get<IPost>(`${environment.WORDPRESS_REST_URL}${POSTS_URL}/${id}`)
      .subscribe((post) => this.post$.next(post));
  }
}
