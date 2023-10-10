import { Component, OnInit } from '@angular/core';
import { User } from '../core/interface/user';
import { FeedService } from '../services/feed/feed.service';
import { OverlayService } from '../services/overlay/overlay.service';
import { ServerService } from '../services/server/server.service';
import { Base } from '../core/directives/base.directive';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ContactsComponent } from '../shared/contacts/contacts.component';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent extends Base implements OnInit {
  user: User;
  feed: Array<any>;
  confirmOverlayData: any = {
    title: 'Add a Post',
    description: 'Are you sure you want to confirm',
  };
  editMode: boolean = false;
  editProfileForm: FormGroup;
  isCurrentUser: boolean = false;

  constructor(
    private service: ServerService,
    private feedService: FeedService,
    private overlayService: OverlayService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    super();
  }
  async ngOnInit(): Promise<void> {
    this.feedService.model.pipe(this.takeUntilDestroy()).subscribe(data => {
      this.feed = data.map((post:any) => {
        return {
          ...post,
          likes: post.likes.map((user: any) => {
            return user.liked_by
          })
        }
      })
    }) 

    this.route.params.subscribe(async params => {  
      if(Number(params['id']) == JSON.parse(localStorage.getItem('currentUser') as any).user_id) {
        this.router.navigate(['/profile'])
        return;
      }
      const res = await this.service.profile(params['id'] ?? ''); 
      if (res && res.success) {
        this.user = res.data.user;
        this.feedService.model.next(res.data.feed);
        this.isCurrentUser = res.data.is_user;  
      } 

   }); 
     
  }

  addPost() {
    this.feedService.addPost(this.user);
  }

  async setEditMode($event: any): Promise<void> {
    this.editMode = $event.editMode;
    if(this.editMode) {
      this.editProfileForm = new FormGroup({ 
        status: new FormControl(this.user.status),
        description: new FormControl(this.user.description)
      })
    }
    if($event.submit) {
      const res = await this.service.updateProfile(this.editProfileForm.value)
      if(res && res.success) {
        this.user = res.data;
      }
    }
  }

  showConnections(connections: any): any {
    const overlay = this.overlayService.open({
      content: ContactsComponent,
      options: {
        data: {
          title: 'Connections',
          contacts: connections,
        },
      },
    });

    overlay.afterClosed$.subscribe(async (data) => {
      if (data) { 
        console.log(data)
        await this.router.navigate([`/profile/${data.id}`])
        window.location.reload()
      }
    });
  }
}
