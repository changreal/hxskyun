import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ZrServicesService } from "../../../../shared/services/zr-services.service";
import { LocalStorageService } from "../../../../shared/services/local-storage.service";
import { BaseUI } from 'src/app/common/baseui';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-sign-in-result',
  templateUrl: './sign-in-result.page.html',
  styleUrls: ['./sign-in-result.page.scss'],
})
export class SignInResultPage extends BaseUI implements OnInit {

  signId=''
  signed_students:any[] = []
  unsigned_students:any[] = []
  signedCount:string = ''
  unsignedCount:string = ''

  constructor(private activatedRoute: ActivatedRoute,
    private zrServices: ZrServicesService,
    private localStorageService: LocalStorageService,
    private router: Router,
    public loadingController: LoadingController) { 
      super()
    }

  

  ngOnInit() {
    super.showLoading( this.loadingController,'请等待',800)
    this.activatedRoute.queryParams.subscribe((result) => {
      // console.log('传入的参数：', result);
      this.signId = result.signId;
    })
    this.loadSignResult()

  }

  // 加载签到结果页面
  loadSignResult(){
    this.zrServices.getSignDetailBySignId(this.signId).then((result:any) => {
      console.log('here',result);
      if(result.code == '200'){
        
        // 对数组过滤
        for( let item of result.data ){ 
          let tmp:any = {
            'studentName': item.studentName,
            'studentId' : item.studentId,
            'exp' : item.exp,
            'signDistance': (parseFloat(item.signDistance)/1000).toFixed(2),
            // 'signDistance': item.signDistance.toFixed(2)/1000
          }          

          
          // 根据签到状态分组
          if(item.signStatus == "已签到"){
            this.signed_students.push(tmp)
          }else{
            this.unsigned_students.push(tmp)
          }
        }

        // console.log(this.unsigned_students);
        // console.log(this.signed_students);

      }
    }).catch((error) => {
      console.log('获取签到结果失败');
    })
  }

  // fiter data


}
