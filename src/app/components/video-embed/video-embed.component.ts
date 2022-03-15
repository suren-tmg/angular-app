import { Component, Input, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'video-embed',
  templateUrl: './video-embed.component.html',
  styleUrls: ['./video-embed.component.css'],
})
export class VideoEmbedComponent implements OnInit {
  @Input() site: string | null = null;
  @Input() key: string | null = null;
  videoUrl: SafeResourceUrl = '';
  vurl: string = '';
  constructor(private sanitize: DomSanitizer) {}

  ngOnInit(): void {
    if (this.site == 'YouTube') {
      this.vurl = 'https://www.youtube.com/embed/' + this.key;
    } else if (this.site == 'Vimeo') {
      this.vurl = 'https://player.vimeo.com/video/' + this.key;
    }
    this.videoUrl = this.getSafeUrl(this.vurl);
  }

  getSafeUrl(url: string) {
    return this.sanitize.bypassSecurityTrustResourceUrl(url);
  }
}
