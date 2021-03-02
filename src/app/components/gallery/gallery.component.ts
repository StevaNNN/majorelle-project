import {Component, Input, OnInit} from '@angular/core';
import {NgxGalleryOptions, NgxGalleryImage, NgxGalleryAnimation} from 'ngx-gallery';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {
  @Input() data: any[];
  public galleryOptions: NgxGalleryOptions[];
  public galleryImages: NgxGalleryImage[];

  ngOnInit() {
    this.galleryOptions = [{
      width: '600px',
      height: '400px',
      thumbnails: false,
      imageBullets: true,
      arrowPrevIcon: 'fa fa-angle-left',
      arrowNextIcon: 'fa fa-angle-right',
      imageSwipe: true,
      imageAnimation: NgxGalleryAnimation.Slide
    }, {
      breakpoint: 800,
      width: '100%',
      height: '600px',
      imagePercent: 80,
      thumbnailsPercent: 20,
      thumbnailsMargin: 20,
      thumbnailMargin: 20
    }, {
      breakpoint: 400,
      preview: false
    }
    ];

    this.galleryImages = this.data;
  }
}
