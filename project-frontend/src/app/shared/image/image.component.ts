import { Component, Input, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.scss']
})
export class ImageComponent implements OnInit {
  @Input() path = ''
  @Input() src: string | null = '';
  @Input() alt = '';
  @Input() config = ''
  current_endpoint = environment.endpoint_url_backend_api;
    
  constructor() {

  }

  ngOnInit(): void {
      this.src = this.current_endpoint + this.src  
  }
}


