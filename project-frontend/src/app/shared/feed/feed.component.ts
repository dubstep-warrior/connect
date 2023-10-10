import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { User } from 'src/app/core/interface/user';
import { FeedService } from 'src/app/services/feed/feed.service';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.scss'],
})
export class FeedComponent implements OnInit {
  @Input() feed: Array<any>;
  @Input() user: User;
  @Input() isCurrentUser: boolean = false;
  current_user_id: number; 

  constructor(private service: FeedService) {
    this.current_user_id = JSON.parse(
      localStorage.getItem('currentUser') as string
    )['user_id'];
  }

  ngOnInit(): void {
       
  }

  triggerCommentState(post: any): void {
    post.commentState = !post.commentState
    if(post.commentState) {
      post.commentForm = new FormGroup({
        description: new FormControl(''),
        post_id: new FormControl(post.id)
      })
    }
  }

  async likePost(post: any, liked?: boolean) {
    if(liked) {
      await this.service.disLikePost(post.id, this.isCurrentUser, this.user)
    } else {
      await this.service.likePost(post.id, this.isCurrentUser, this.user); 
    }
     
  }

  async addComment(post: any) {
    await this.service.addComment(post.commentForm.value, this.isCurrentUser, this.user) 
  }
}
