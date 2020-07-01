import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { MylocalstorageService } from '../shared/services/mylocalstorage.service';
import { NavController, AlertController, LoadingController } from '@ionic/angular';
import { CommonService } from '../shared/services/common.service';
import { BaseUI } from '../common/baseui';


@Injectable({
  providedIn: 'root'
})


/*
为了解决欢迎页面一闪而过的bug，用路由守护来解决。
当用户满足一定条件才被允许进入or离开一个路由。
*/ 
export class StartAppGuard  extends BaseUI implements CanActivate{
  
  public isLoggedIn: boolean = false
  loading:any
  constructor(private localStorageService: MylocalstorageService,
    public navCtrl: NavController,public router:Router,
    public common:CommonService,
    public alertController: AlertController,public loadingController: LoadingController,){super()}
 
  // canActive: 处理导航到某路由的情况。
  canActivate(route: ActivatedRouteSnapshot, state:RouterStateSnapshot,):boolean{

    console.log('ion in ')
    super.showLoading(this.loadingController,'....')
    let url='/Login/hello'
    // let val=this.localStorageService.get('Token','')
    // console.log(val)
    this.common.ajaxPost(url,'').then((response:any)=>{
      console.log('start---'+response)
      if(response['code']==200){
        // this.loadingController.dismiss()
        console.log(response)
        console.log('res:'+response['success'])
        this.router.navigateByUrl('/tabs')
        
      }else{
        // this.loadingController.dismiss()
        this.router.navigateByUrl('/login')
        
      }
    }) .catch((err:any)=>{
      console.log(err);
    })
      // if(val==null||val===undefined){
      //   this.isLoggedIn =false  
      //   // this.loading.dismiss
      //   this.router.navigateByUrl('/login')
        
      //   return false
      // }        
      // else{
      //   this.isLoggedIn = true 
      //   // this.loading.dismiss
      //   this.router.navigateByUrl('/tabs')
        
      //   return true
      // }
      return true
  }
  async presentLoading(mes:string) {
    this.loading = await this.loadingController.create({
     message: mes,
     duration: 2000
   });
   await this.loading.present();
 }

}