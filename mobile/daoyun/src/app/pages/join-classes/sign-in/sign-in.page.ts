import { Component, OnInit } from '@angular/core';
declare var BMap;
@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.page.html',
  styleUrls: ['./sign-in.page.scss'],
})
export class SignInPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  qrscanner6(){
    let geolocation = new BMap.Geolocation(); //新建地图对象
    return new Promise((reslove, reject) => {
      geolocation.getCurrentPosition(function (r) {
        console.log(this.getStatus())
        if (this.getStatus() == 0) {
          console.log('获取位置成功：', r.point.lat, r.point.lng);
          reslove(r);
        }
        else {
          console.log('获取位置失败:', this.getStatus());
          reject(this.getStatus());
        }
      });
    })
  }
}
