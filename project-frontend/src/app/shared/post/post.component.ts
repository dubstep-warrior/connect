import { CommonModule } from '@angular/common';
import { Component, NgModule } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { CustomOverlayRef } from 'src/app/core/classes/custom-overlay-ref';
import { SafeUrlPipe } from './../../core/pipes/safe-url/safe-url.pipe';
@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent {
  data: any;
  form: FormGroup;
  preview_img: string = '';
  constructor(private overlayRef: CustomOverlayRef) {
    this.data = this.overlayRef.data.options.data; 
    this.form = this.data.form
  }

  uploadFile(event: Event) { 
    const file = (event?.target as HTMLInputElement)?.files?.[0]; 
    this.preview_img = URL.createObjectURL(file as Blob);
    this.form.patchValue({
      image: file
    }); 
  }

  resolve(): void {
    this.overlayRef.close(true);
  }
} 
