import { OverlayRef } from '@angular/cdk/overlay';
import { Subject, Subscription } from 'rxjs';

export class CustomOverlayRef {
  afterClosed$: Subject<any> = new Subject<any>();
  backdropSub: Subscription;

  constructor(public overlay: OverlayRef, public data: any) {
    this.backdropSub = overlay.backdropClick().subscribe(() => this.close());
  }

  close(data?: any) {
    this.afterClosed$.next(data ?? false);
    this.afterClosed$.complete();
    this.overlay.dispose();
    this.backdropSub.unsubscribe();
  }
}
