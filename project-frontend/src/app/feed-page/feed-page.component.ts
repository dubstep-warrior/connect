import { Component, OnInit } from '@angular/core';
import { Base } from '../core/directives/base.directive';
import { AuthService } from '../services/auth/auth.service';
import { FeedService } from '../services/feed/feed.service';
import { ServerService } from '../services/server/server.service';

@Component({
  selector: 'app-feed-page',
  templateUrl: './feed-page.component.html',
  styleUrls: ['./feed-page.component.scss']
})
export class FeedPageComponent extends Base implements OnInit{
  feed: Array<any>;
  user: any;
  loading: boolean = false;
  constructor( 
    private service: FeedService, public authService: AuthService, private serverService: ServerService
  ) {
    super(); 
  }

  async ngOnInit(): Promise<void> { 
    if(!localStorage.getItem('currentUser')){
      return;
    }
    this.loading = true;
    const res = await this.serverService.profile('');
    if (res && res.success) {
      this.user = res.data.user; 
    } 
    if(this.user) {
      this.service.model.pipe(this.takeUntilDestroy()).subscribe(data => {
        this.feed = data.map((post:any) => {
          return {
            ...post,
            likes: post.likes.map((user: any) => {
              return user.liked_by
            })
          }
        }) 
      })
      await this.service.refreshFeed(); 
    }
    this.loading = false;
  }

  addPost() {
    this.service.addPost(this.user);
  }
}
