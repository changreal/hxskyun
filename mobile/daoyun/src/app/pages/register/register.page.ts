import { Component, OnInit, ViewChild } from '@angular/core';
import { IonSlides, NavController, AlertController } from '@ionic/angular';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  register = {
    phone:'',
    email:'',
    userName:'',
    id:'',
    password:'',
    confirmPassword:'',
    code:'',
    university:'',
    college:'',
    major:'',
    usertype:'',
    gender:''
  };
  sent:boolean = false;
  time:number = 60;
  button:string ='发送验证码';
  captcha:any;
  private deadline:number;
  constructor(private router: Router,public navCtrl: NavController, private alertCtrl:AlertController,public http: HttpClient) { }
  @ViewChild('registerSlides' ,{static: true})  registerSlides: IonSlides;
  ngOnInit() {
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
    this.registerSlides.lockSwipes(true);
  }
  next(){
    this.registerSlides.lockSwipes(false);
    this.registerSlides.slideNext();
    this.registerSlides.lockSwipes(true);
  }
  previous() {
    this.registerSlides.lockSwipes(false);
    this.registerSlides.slidePrev();
    this.registerSlides.lockSwipes(true);
  }
  gotoLogin(){
    this.router.navigateByUrl('/login');
  }
}
