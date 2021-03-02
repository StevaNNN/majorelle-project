import {Component} from '@angular/core';

@Component({
  selector: 'app-livingrooms',
  templateUrl: './livingrooms.component.html',
  styleUrls: ['./livingrooms.component.scss']
})
export class LivingroomsComponent {

  public headerConfig: any = {
    backgroungImgUrl: 'assets/img/livingrooms/livingroom_01_opt.png',
    title: 'Living rooms bla bla..',
    subTitle: 'subtitle bla bla bla...',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed rutrum ut nulla id dictum.'
  };

  public galleryConfig: any[] = [{
    small: 'assets/img/livingrooms/livingroom_01_opt.png',
    medium: 'assets/img/livingrooms/livingroom_01_opt.png',
    big: 'assets/img/livingrooms/livingroom_01_opt.png'
  }, {
    small: 'assets/img/livingrooms/livingroom_02_opt.png',
    medium: 'assets/img/livingrooms/livingroom_02_opt.png',
    big: 'assets/img/livingrooms/livingroom_02_opt.png'
  },
  //   {
  //   small: 'assets/img/livingrooms/livingroom_03_opt.png',
  //   medium: 'assets/img/livingrooms/livingroom_03_opt.png',
  //   big: 'assets/img/livingrooms/livingroom_03_opt.png'
  // },
    {
    small: 'assets/img/livingrooms/livingroom_04_opt.png',
    medium: 'assets/img/livingrooms/livingroom_04_opt.png',
    big: 'assets/img/livingrooms/livingroom_04_opt.png'
  }, {
    small: 'assets/img/livingrooms/livingroom_05_opt.png',
    medium: 'assets/img/livingrooms/livingroom_05_opt.png',
    big: 'assets/img/livingrooms/livingroom_05_opt.png'
  }, {
    small: 'assets/img/livingrooms/livingroom_06_opt.png',
    medium: 'assets/img/livingrooms/livingroom_06_opt.png',
    big: 'assets/img/livingrooms/livingroom_06_opt.png'
  }, {
    small: 'assets/img/livingrooms/livingroom_07_opt.png',
    medium: 'assets/img/livingrooms/livingroom_07_opt.png',
    big: 'assets/img/livingrooms/livingroom_07_opt.png'
  }
  // , {
  //   small: 'assets/img/livingrooms/livingroom_08_opt.png',
  //   medium: 'assets/img/livingrooms/livingroom_08_opt.png',
  //   big: 'assets/img/livingrooms/livingroom_08_opt.png'
  // }
  ];
}
