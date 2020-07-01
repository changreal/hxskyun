import { Component, OnInit, ElementRef, Input } from '@angular/core';
import { qrcanvas } from 'qrcanvas';

@Component({
  selector: 'app-qrcode',
  templateUrl: './qrcode.page.html',
  styleUrls: ['./qrcode.page.scss'],
})
export class QrcodePage implements OnInit {

  constructor(private elementRef: ElementRef) { }
  options: any;
  effects = ['none', 'liquid', 'round', 'spot'];
  @Input() size: string;
  @Input() data: string;
  @Input() logo: string;
  courseid='1111'
  ngOnInit() {
  }
  generateQrCode() {
    let innerHTML = '';
    this.elementRef.nativeElement.querySelector('#qrcode').innerHTML = innerHTML;
    this.options = {
      cellSize: 8,
      size: this.size,
      correctLevel: 'H',
      data: this.data,
      effect: {
        key: 'none',
        value: 1,
      }
    };
    this.options.effect.key = this.effects[Math.floor(Math.random() * this.effects.length)];
    if (this.logo) {
      let image = new Image();
      image.src = this.logo;
      this.options.logo = {
        image,
        size: 10 / 100
      };
      image.onload = () => {
        const canvas = qrcanvas(this.options);
        this.elementRef.nativeElement.querySelector('#qrcode').appendChild(canvas);
      };
    } else {
      const canvas = qrcanvas(this.options);
      this.elementRef.nativeElement.querySelector('#qrcode').appendChild(canvas);
    }
  }

}
