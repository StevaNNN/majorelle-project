import {Component} from '@angular/core';

@Component({
  selector: 'app-projecting',
  templateUrl: './projecting.component.html',
  styleUrls: ['./projecting.component.scss']
})
export class ProjectingComponent {


  public headerConfig: any = {
    backgroungImgUrl: 'assets/img/projektovanje_opt.png',
    title: 'Projektovanje',
    subTitle: 'subtitle bla bla bla...',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed rutrum ut nulla id dictum.'
  };
}
