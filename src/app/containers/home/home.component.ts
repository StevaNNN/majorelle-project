import {Component, ElementRef, HostListener, OnInit, ViewChild} from '@angular/core';
import {trigger, state, style, transition, animate} from '@angular/animations';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [
    trigger('scrollAnimation', [
      state('show', style({
        opacity: 1
      })),
      state('hide', style({
        opacity: 0
      })),
      transition('show => hide', animate('700ms ease-out')),
      transition('hide => show', animate('700ms ease-in'))
    ])
  ]
})
export class HomeComponent implements OnInit {
  @ViewChild('whiteContainer') private whiteContainer: ElementRef;
  @ViewChild('videPlayer') private videPlayer: ElementRef;
  public state = 'hide';
  public newsConfig: any[] = [{
    img1Url: 'assets/img/news/klub_sto_01.png',
    img2Url: 'assets/img/news/klub_sto_02.png',
    title: 'Klub sto u industrijskom stilu',
    content: 'Dimenzije većeg stola: visina 45cm, prečnik 90cm \n' +
      'Dimenzije manjeg stola: visina 35cm, prečnik 70cm\n' +
      'Debljina ploče: 3.6cm, debljina profila postolja 1.5cm\n' +
      '\n' +
      'Materijal: orahov furnir na medijapanu i metal \n' +
      'Cena oba stola: 30.000,00 dinara\n' +
      '   *Sa pločom od farbanog medijapana cena je 26.000,00, a \n' +
      '    sa pločom od iverice cena je 18.000,00 dinara,\n' +
      '    u boji i dezenu koji Vi odaberete.\n' +
      'Rade se po narudžbini, rok isporuke je 2 nedelje.\n',
    navigation: '/kitchens'
  }];

  public ngOnInit(): void {
    this.videPlayer.nativeElement.muted = 'muted';
  }


  @HostListener('window:scroll', ['$event'])
  checkScroll() {
    const viewHeight = window.innerHeight;
    const scrollPosition = window.pageYOffset;
    const whiteContainerPosition = this.whiteContainer.nativeElement.offsetTop;
    const whiteContainerHeight = this.whiteContainer.nativeElement.clientHeight;
    const heightSum = viewHeight + scrollPosition;

    if (heightSum > whiteContainerPosition && scrollPosition < (whiteContainerPosition + whiteContainerHeight)) {
      this.state = 'show';
    } else {
      this.state = 'hide';
    }
  }
}
