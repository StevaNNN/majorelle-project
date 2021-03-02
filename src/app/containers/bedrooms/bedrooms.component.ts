import { Component } from '@angular/core';

@Component({
  selector: 'app-bedrooms',
  templateUrl: './bedrooms.component.html',
  styleUrls: ['./bedrooms.component.scss']
})
export class BedroomsComponent {

  public headerConfig: any = {
    backgroungImgUrl: 'assets/img/bedrooms/bedroom_01_opt.png',
    title: 'Bedrooms bla bla..',
    subTitle: 'subtitle bla bla bla...',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed rutrum ut nulla id dictum.'
  };

  public galleryConfig: any[] = [{
    small: 'assets/img/bedrooms/bedroom_01_opt.png',
    medium: 'assets/img/bedrooms/bedroom_01_opt.png',
    big: 'assets/img/bedrooms/bedroom_01_opt.png'
  }, {
    small: 'assets/img/bedrooms/bedroom_02_opt.png',
    medium: 'assets/img/bedrooms/bedroom_02_opt.png',
    big: 'assets/img/bedrooms/bedroom_02_opt.png'
  }, {
    small: 'assets/img/bedrooms/bedroom_03_opt.png',
    medium: 'assets/img/bedrooms/bedroom_03_opt.png',
    big: 'assets/img/bedrooms/bedroom_03_opt.png'
  }, {
    small: 'assets/img/bedrooms/bedroom_04_opt.png',
    medium: 'assets/img/bedrooms/bedroom_04_opt.png',
    big: 'assets/img/bedrooms/bedroom_04_opt.png'
  }];
}
