import {Component} from '@angular/core';

@Component({
  selector: 'app-office-furniture',
  templateUrl: './office-furniture.component.html',
  styleUrls: ['./office-furniture.component.scss']
})
export class OfficeFurnitureComponent {

  public headerConfig: any = {
    backgroungImgUrl: 'assets/img/office-furniture/livingroom_03_opt.png',
    title: 'Living rooms bla bla..',
    subTitle: 'subtitle bla bla bla...',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed rutrum ut nulla id dictum.'
  };

  public galleryConfig: any[] = [{
    small: 'assets/img/office-furniture/livingroom_03_opt.png',
    medium: 'assets/img/office-furniture/livingroom_03_opt.png',
    big: 'assets/img/office-furniture/livingroom_03_opt.png'
  }, {
    small: 'assets/img/office-furniture/livingroom_08_opt.png',
    medium: 'assets/img/office-furniture/livingroom_08_opt.png',
    big: 'assets/img/office-furniture/livingroom_08_opt.png'
  }];
}
