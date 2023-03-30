import { Component, Input, OnChanges } from '@angular/core';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-preview-image',
  templateUrl: './preview-image.component.html',
  styleUrls: ['./preview-image.component.scss']
})
export class PreviewImageComponent implements OnChanges{
  @Input() file!:File
  url! : SafeUrl
  private originalUrl! : string

  constructor(private sanitizer:DomSanitizer){

  }

  ngOnChanges(){
    if(this.originalUrl){
      URL.revokeObjectURL(this.originalUrl)
    }
    this.originalUrl =  URL.createObjectURL(this.file)
    this.url = this.sanitizer.bypassSecurityTrustUrl(this.originalUrl)
  }

}
