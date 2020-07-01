import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ZrServicesService } from "../../../../shared/services/zr-services.service";
import { LocalStorageService } from "../../../../shared/services/local-storage.service";


@Component({
  selector: 'app-sign-in-result',
  templateUrl: './sign-in-result.page.html',
  styleUrls: ['./sign-in-result.page.scss'],
})
export class SignInResultPage implements OnInit {

  signId=''
  constructor(private activatedRoute: ActivatedRoute,
    private zrServices: ZrServicesService,
    private localStorageService: LocalStorageService,
    private router: Router,) { }

  ngOnInit() {
    this.activatedRoute.queryParams.subscribe((result) => {
      console.log('传入的参数：', result);
      this.signId = result.signId;
    })
    this.loadSignResult()

  }

  // 加载签到结果页面
  loadSignResult(){
    this.zrServices.getSignDetailBySignId(this.signId).then((result:any) => {
      console.log('here',result);
      if(result.code == '200'){

      }
    }).catch((error) => {
      console.log('获取签到结果失败');
    })
  }

}
