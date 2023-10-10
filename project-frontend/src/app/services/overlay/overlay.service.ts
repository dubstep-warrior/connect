import { Injectable, Injector } from '@angular/core';
import { Overlay, OverlayConfig, PositionStrategy } from '@angular/cdk/overlay';
import { CustomOverlayRef } from '../../core/classes/custom-overlay-ref';
import { ComponentPortal } from '@angular/cdk/portal';
import { OverlayModalComponent } from 'src/app/shared/overlay-modal/overlay-modal.component';

@Injectable({
  providedIn: 'root',
})
export class OverlayService {
  constructor(private injector: Injector, private overlay: Overlay) {}

  open(data: any): CustomOverlayRef {
    const overlayRef = this.overlay.create(this.getOverlayConfig(data));
    const customOverlayRef: CustomOverlayRef = new CustomOverlayRef(
      overlayRef,
      data
    );
    const injector = this._createInjector(customOverlayRef, this.injector);

    overlayRef.attach(
      new ComponentPortal(OverlayModalComponent, null, injector)
    );

    return customOverlayRef;
  }

  getOverlayConfig(data: any): OverlayConfig {
    return new OverlayConfig({
      hasBackdrop: true,
      scrollStrategy: this.overlay.scrollStrategies.noop(),
      positionStrategy: this.overlay
        .position()
        .global()
        .centerHorizontally()
        .centerVertically(),
    });
  }

  _createInjector(ref: CustomOverlayRef, inj: Injector): Injector {
    return Injector.create({
      parent: inj,
      providers: [{ provide: CustomOverlayRef, useValue: ref }],
    });
  }
}
