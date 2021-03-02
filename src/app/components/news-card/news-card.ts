import {Component, Input, OnInit} from '@angular/core';
import {NgxGalleryAnimation, NgxGalleryImage, NgxGalleryOptions} from 'ngx-gallery';

@Component({
  selector: 'app-news-card',
  templateUrl: './news-card.html',
  styleUrls: ['./news-card.scss']
})
export class NewsCardComponent implements OnInit {
  @Input() data: any;
  public galleryOptions: NgxGalleryOptions[];
  public galleryImages: any[];
  public gallery2Images: any[];

  ngOnInit() {
    this.galleryOptions = [{
      width: '300px',
      height: '200px',
      thumbnails: false,
      imageArrows : false,
      imageAnimation: NgxGalleryAnimation.Slide
    }, {
      breakpoint: 800,
      width: '100%',
      height: '200px',
      imagePercent: 80
    }, {
      breakpoint: 400,
      preview: false
    }
    ];

    this.galleryImages = [{
      small: this.data.img1Url,
      medium: this.data.img1Url,
      big: this.data.img1Url
    }];

    this.gallery2Images = [{
      small: this.data.img2Url,
      medium: this.data.img2Url,
      big: this.data.img2Url
    }];
  }
}
