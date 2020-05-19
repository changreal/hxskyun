import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss'],
})
export class TestComponent implements OnInit {

  constructor(public http:HttpClient) { }

  ngOnInit() {}
  onLogin(){
    let url="https://imoocqa.gugujiankong.com/api/feeds/get"
    this.http.get(url).subscribe((re)=>{
      console.log(re);
    })
  }
}
