import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { CustomOverlayRef } from 'src/app/core/classes/custom-overlay-ref';

@Component({
  selector: 'app-draft-message',
  templateUrl: './draft-message.component.html',
  styleUrls: ['./draft-message.component.scss']
})
export class DraftMessageComponent {
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
    this.overlayRef.close(this.form);
  }
}
