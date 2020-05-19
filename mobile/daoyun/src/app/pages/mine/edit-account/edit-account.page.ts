import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-edit-account',
  templateUrl: './edit-account.page.html',
  styleUrls: ['./edit-account.page.scss'],
})
export class EditAccountPage implements OnInit {
  shop:any
  constructor() { }

  ngOnInit() {
    this.ionViewWillEnter();
  }
  
  ionViewWillEnter(){
    this.shop = {
      phone:'1234',
      email:'',
    }
   


}
}
