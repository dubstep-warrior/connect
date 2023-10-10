import { Component, OnInit, Type } from '@angular/core';
import { CustomOverlayRef } from '../../core/classes/custom-overlay-ref';
import { NgModule } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';
import { OverlayModule } from '@angular/cdk/overlay';
import { MatExpansionModule } from '@angular/material/expansion';

@Component({
  selector: 'app-overlay-modal',
  templateUrl: './overlay-modal.component.html',
  styleUrls: ['./overlay-modal.component.scss'],
})
export class OverlayModalComponent implements OnInit {
  content: Type<any>;
  optionsData: any;

  constructor(private overlayRef: CustomOverlayRef) {
    const data = this.overlayRef.data; 
    this.content = data?.content;
    this.optionsData = data?.options?.data;
  }

  ngOnInit(): void {}

  close(): void {
    this.overlayRef.close();
  }
}
@NgModule({
  declarations: [ 
    OverlayModalComponent, 
  ],
  imports: [  
    MatIconModule, 
    CommonModule,
    OverlayModule,
    MatExpansionModule
  ],
  exports: [  
  ],
})
export class OverlayModalModule {}
