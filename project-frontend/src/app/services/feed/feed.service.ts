import { Injectable, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { User } from 'src/app/core/interface/user';
import { PostComponent } from 'src/app/shared/post/post.component';
import { OverlayService } from '../overlay/overlay.service';
import { ServerService } from '../server/server.service';
import { Subject } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class FeedService {
  constructor(
    private service: ServerService,
    private overlayService: OverlayService,
    private router: Router
  ) {}
  model: Subject<any> = new Subject();

  addPost(user: User) {
    let form = new FormGroup({
      description: new FormControl(''),
      image: new FormControl(null),
    });

    const overlay = this.overlayService.open({
      content: PostComponent,
      options: {
        data: {
          title: 'Add a Post',
          form: form,
        },
        user: user,
      },
    });

    overlay.afterClosed$.subscribe(async (data) => {
      if (data) {
        let formData = new FormData();
        Object.keys(form.value).forEach((key) => {
          if ((form.value as any)[key])
            formData.append(key, (form.value as any)[key]);
        });
        const res = await this.service.post(formData); 
        if (res && res.success) {
          const user_id = this.router.url.includes('profile') ? JSON.parse(localStorage.getItem('currentUser') as any).user_id : '';
          await this.refreshFeed(user_id);
        }
      }
    });
  }

  async likePost(post_id: number, isCurrentUser: boolean, user: User) {
    const res = await this.service.likePost('POST', { post_id: post_id });
    if (res && res.success) {
      const user_id = this.router.url.includes('profile') ? (isCurrentUser ? JSON.parse(localStorage.getItem('currentUser') as any).user_id : user.id) : '';       
      await this.refreshFeed(user_id);
    }
  }

  async disLikePost(post_id: number, isCurrentUser: boolean, user: User) { 
    const res = await this.service.likePost('DELETE', { post_id: post_id }); 
    if (res && res.success) {
      const user_id = this.router.url.includes('profile') ? (isCurrentUser ? JSON.parse(localStorage.getItem('currentUser') as any).user_id : user.id) : '';      await this.refreshFeed(user_id);
    }
  }

  async addComment(comment: any, isCurrentUser: boolean, user: User) {
    const res = await this.service.addComment(comment)
    if (res && res.success) {
      const user_id = this.router.url.includes('profile') ? (isCurrentUser ? JSON.parse(localStorage.getItem('currentUser') as any).user_id : user.id) : '';
      await this.refreshFeed(user_id);
    }
  } 

  async refreshFeed(user_id?: number): Promise<void> {
    const feedRes = await this.service.feed(user_id);
    if (feedRes && feedRes.success) {
      this.model.next(feedRes.data);
    }
  }
}
