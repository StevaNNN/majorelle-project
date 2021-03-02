import {Component} from '@angular/core';

@Component({
  selector: 'app-bathrooms',
  templateUrl: './bathrooms.component.html',
  styleUrls: ['./bathrooms.component.scss']
})
export class BathroomsComponent {

  public headerConfig: any = {
    backgroungImgUrl: 'assets/img/bathrooms/bathroom_01_opt.png',
    title: 'Bethrooms bla bla..',
    subTitle: 'subtitle bla bla bla...',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed rutrum ut nulla id dictum.'
  };

  public galleryConfig: any[] = [{
    small: 'assets/img/bathrooms/bathroom_01_opt.png',
    medium: 'assets/img/bathrooms/bathroom_01_opt.png',
    big: 'assets/img/bathrooms/bathroom_01_opt.png'
  }, {
    small: 'assets/img/bathrooms/bathroom_02_opt.png',
    medium: 'assets/img/bathrooms/bathroom_02_opt.png',
    big: 'assets/img/bathrooms/bathroom_02_opt.png'
  }, {
    small: 'assets/img/bathrooms/bathroom_03_opt.png',
    medium: 'assets/img/bathrooms/bathroom_03_opt.png',
    big: 'assets/img/bathrooms/bathroom_03_opt.png'
  }, {
    small: 'assets/img/bathrooms/bathroom_04_opt.png',
    medium: 'assets/img/bathrooms/bathroom_04_opt.png',
    big: 'assets/img/bathrooms/bathroom_04_opt.png'
  }, {
    small: 'assets/img/bathrooms/bathroom_05_opt.png',
    medium: 'assets/img/bathrooms/bathroom_05_opt.png',
    big: 'assets/img/bathrooms/bathroom_05_opt.png'
  }, {
    small: 'assets/img/bathrooms/bathroom_06_opt.png',
    medium: 'assets/img/bathrooms/bathroom_06_opt.png',
    big: 'assets/img/bathrooms/bathroom_06_opt.png'
  }, {
    small: 'assets/img/bathrooms/bathroom_07_opt.png',
    medium: 'assets/img/bathrooms/bathroom_07_opt.png',
    big: 'assets/img/bathrooms/bathroom_07_opt.png'
  }, {
    small: 'assets/img/bathrooms/bathroom_08_opt.png',
    medium: 'assets/img/bathrooms/bathroom_08_opt.png',
    big: 'assets/img/bathrooms/bathroom_08_opt.png'
  }];
}
