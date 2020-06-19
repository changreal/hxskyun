import { Component, OnInit } from '@angular/core';
import { MylocalstorageService } from 'src/app/shared/services/mylocalstorage.service';

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
    userName:'s',
    nickName:'',
    year:'',
    gender:'',
    college:'',
    major:'',
    schoolenum:'',
    identify:''
  };
  constructor(public localStorageService:MylocalstorageService) { }

  ngOnInit() {
  }
  ionViewDidEnter(){
    console.log("view enter")

    let temp=this.localStorageService.get('schooAandmajor','')
    if (temp){
      this.userDetail.college=temp.colleage
      this.userDetail.major=temp.major
      this.localStorageService.remove('schooAandmajor')
    }
    
  }
  getValue(){
    console.log('我选中的是', this.user.value)
  }
  onSave(){
    console.log(this.userDetail)
  }
}
