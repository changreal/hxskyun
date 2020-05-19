import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.page.html',
  styleUrls: ['./user-info.page.scss'],
})
export class UserInfoPage implements OnInit {
  headface: string
  public user={
    value:null
  }
  userDetail = {
    headface:'',
    userName:'',
    nickName:'',
    year:'',
    gender:'',
    college:'',
    major:'',
    schoolenum:'',
    identify:''
  };
  constructor() { }

  ngOnInit() {
  }
  getValue(){
    console.log('我选中的是', this.user.value)
  }

}
