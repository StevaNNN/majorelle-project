import {Component, HostListener} from '@angular/core';
import {animate, state, style, transition, trigger} from '@angular/animations';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.html',
  styleUrls: ['./footer.scss'],
  animations: [
    trigger('scrollAnimation', [
      state('show', style({
        opacity: 1,
        transform: 'translateY(0)'
      })),
      state('hide', style({
        opacity: 0,
        transform: 'translateY(-100%)'
      })),
      transition('show => hide', animate('500ms ease-out')),
      transition('hide => show', animate('500ms ease-in'))
    ])
  ]
})
export class AppFooterComponent {
  state = 'hide';


  @HostListener('window:scroll', ['$event'])
  checkScroll() {
    const viewHeight = window.innerHeight;
    const scrollPosition = window.pageYOffset;
    const heightSum = viewHeight + scrollPosition;
    const documentHeight = document.body.scrollHeight;

    if (heightSum > documentHeight - 100) {
      this.state = 'show';
    } else {
      this.state = 'hide';
    }
  }
}
