import {Component} from '@angular/core';

@Component({
  selector: 'app-firms',
  templateUrl: './firms.component.html',
  styleUrls: ['./firms.component.scss']
})
export class FirmsComponent {

  public headerConfig: any = {
    backgroungImgUrl: 'assets/img/firms/new_visual_01.png',
    title: 'Bedrooms bla bla..',
    subTitle: 'subtitle bla bla bla...',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed rutrum ut nulla id dictum.'
  };

  public gallery1Config: any[] = [{
    small: 'assets/img/firms/new_visual_01.png',
    medium: 'assets/img/firms/new_visual_01.png',
    big: 'assets/img/firms/new_visual_01.png'
  }, {
    small: 'assets/img/firms/new_visual_02.png',
    medium: 'assets/img/firms/new_visual_02.png',
    big: 'assets/img/firms/new_visual_02.png'
  }, {
    small: 'assets/img/firms/new_visual_03.png',
    medium: 'assets/img/firms/new_visual_03.png',
    big: 'assets/img/firms/new_visual_01.png'
  }, {
    small: 'assets/img/firms/new_visual_04.png',
    medium: 'assets/img/firms/new_visual_04.png',
    big: 'assets/img/firms/new_visual_04.png'
  }, {
    small: 'assets/img/firms/new_visual_05.png',
    medium: 'assets/img/firms/new_visual_05.png',
    big: 'assets/img/firms/new_visual_05.png'
  }, {
    small: 'assets/img/firms/new_visual_06.png',
    medium: 'assets/img/firms/new_visual_06.png',
    big: 'assets/img/firms/new_visual_06.png'
  }];

  public gallery2Config: any[] = [{
    small: 'assets/img/firms/cacao_beauty_center_01.png',
    medium: 'assets/img/firms/cacao_beauty_center_01.png',
    big: 'assets/img/firms/cacao_beauty_center_01.png'
  }, {
    small: 'assets/img/firms/cacao_beauty_center_02.png',
    medium: 'assets/img/firms/cacao_beauty_center_02.png',
    big: 'assets/img/firms/cacao_beauty_center_02.png'
  }, {
    small: 'assets/img/firms/cacao_beauty_center_03.png',
    medium: 'assets/img/firms/cacao_beauty_center_03.png',
    big: 'assets/img/firms/cacao_beauty_center_03.png'
  }, {
    small: 'assets/img/firms/cacao_beauty_center_04.png',
    medium: 'assets/img/firms/cacao_beauty_center_04.png',
    big: 'assets/img/firms/cacao_beauty_center_04.png'
  }];
}
