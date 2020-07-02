import { Component, OnInit } from '@angular/core';
import { ZrServicesService } from 'src/app/shared/services/zr-services.service';
import { MylocalstorageService } from 'src/app/shared/services/mylocalstorage.service';

@Component({
  selector: 'app-edit-account',
  templateUrl: './edit-account.page.html',
  styleUrls: ['./edit-account.page.scss'],
})
export class EditAccountPage implements OnInit {
  shop={
    phone:'',
    email:''
  }
  userId:any
  constructor(private zrServices:ZrServicesService,private localStorageService:MylocalstorageService) { }

  ngOnInit() {
  
  }
  
  ionViewWillEnter(){
    this.userId=this.localStorageService.get('uid','')
    this.loadUserInfo()
}
loadUserInfo(){

  this.zrServices.getUserByUserId(this.userId).then(async (result:any) => {
    console.log('here:', result.data);
    if(result.success){
        this.shop.phone=result.data.phone
        this.shop.email=result.data.email
        console.log('asgagaeegeagr'+result.data.roleId)
        
    }
  
  }).catch((error) => {
    console.log('获取用户信息失败', error)
  })
  
}
}
