import { Component, OnInit } from '@angular/core';
import { MylocalstorageService } from 'src/app/shared/services/mylocalstorage.service';
import { ZrServicesService } from 'src/app/shared/services/zr-services.service';
import { BaseUI } from 'src/app/common/baseui';
import { ToastController, } from '@ionic/angular';
import { Router } from '@angular/router';
import { EventService } from 'src/app/shared/services/event.service';
import { formatDate } from '@angular/common';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.page.html',
  styleUrls: ['./user-info.page.scss'],
})
export class UserInfoPage  extends BaseUI implements OnInit {
  headface: string
  
  public user={
    value:null
  }
  userId:any
  userDetail = {
    name:'',
    birthDate:'',
    sex:'',
    school:'',
    major:'',
    userId:'',
    roleId:''
  };
  constructor(public localStorageService:MylocalstorageService,private zrServices: ZrServicesService,private toastController: ToastController,
    private router :Router, public eventService: EventService
    ) { super()}

  ngOnInit() {
    this.userId=this.localStorageService.get('uid','')
    this.userDetail.roleId =this.localStorageService.get('roldId','')
    this.loadUserInfo()
  }
  
  ionViewDidEnter(){
    
    // console.log("view enter")
    
    let temp=this.localStorageService.get('schooAandmajor','')
    if (temp){
      this.userDetail.school=temp.colleage
      this.userDetail.major=temp.major
      this.localStorageService.remove('schooAandmajor')
    }
    // console.log('111111111'+this.userDetail.major+this.userDetail.roleId)
  }
   loadUserInfo(){

    this.zrServices.getUserByUserId(this.userId).then(async (result:any) => {
      // console.log('here:', result.data);
      if(result.success){
          this.userDetail.school=result.data.school
          this.userDetail.major=result.data.major
          this.userDetail.sex=result.data.sex
          this.userDetail.birthDate=result.data.birthDate
          this.userDetail.name=result.data.name
          this.userDetail.userId=result.data.userId
          this.userDetail.roleId=String(result.data.roleId)
          // console.log('asgagaeegeagr'+result.data.roleId)
          
      }
    
    }).catch((error) => {
      console.log('获取用户信息失败', error)
    })
    
  }

  getValue(){
    // console.log('我选中的是', this.userDetail.roleId)
  }
  ionViewDidLeave(){
    // console.log('userinfo leave')
    this.eventService.event.emit('userupdate');
  }
  onSave(){
   
    
    // console.log(this.userDetail.roleId)
    
    this.zrServices.updateUserinfo(this.userDetail).then((result:any) => {
      // console.log('更新:', result.data);
      if(result.code=='200'){
        this.localStorageService.set('roleId', this.userDetail.roleId)
         super.showToast(this.toastController,'用户信息更新成功')
         this.router.navigateByUrl('/tabs/mine') 
        // this.router.navigateByUrl('/tabs/mine').then(()=>{location.reload();});
        //  console.log(result.code)
         console.log('userdetail：',result.data);
        //  console.log(result.msg)
     }else {
         super.showToast(this.toastController,'用户信息更新失败')
     }
     }).catch((error) => {
       super.showToast(this.toastController,'用户信息更新失败')
     })
   }
  
}
