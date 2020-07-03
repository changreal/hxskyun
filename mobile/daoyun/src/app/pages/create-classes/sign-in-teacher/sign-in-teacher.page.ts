import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ZrServicesService } from "../../../shared/services/zr-services.service";
import { LocalStorageService } from "../../../shared/services/local-storage.service";
import { LoadingController } from '@ionic/angular';
import { BaseUI } from 'src/app/common/baseui';


@Component({
  selector: 'app-sign-in-teacher',
  templateUrl: './sign-in-teacher.page.html',
  styleUrls: ['./sign-in-teacher.page.scss'],
})
export class SignInTeacherPage extends BaseUI implements OnInit {

  courseMembersCount = ''
  signCount = ''
  
  // 发起签到所需变量
  courseId = ''
  courseName=''


  // 签到列表
  historySignList:any[] = [
  ]
  constructor(private activatedRoute: ActivatedRoute,
    private zrServices: ZrServicesService,
    private localStorageService: LocalStorageService,
    private router: Router,
    public loadingController: LoadingController
    ) { 
      super()
    }

  ngOnInit() {
    super.showLoading( this.loadingController,'请等待',800)
    this.activatedRoute.queryParams.subscribe((result) => {
      // console.log('传入的参数：', result);
      this.courseId = result.courseId;
      this.courseName = result.courseName
      this.courseMembersCount = result.courseMembersCount
    })
    this.loadHistorySignList()

  }


  // 获取历史签到记录列表
  loadHistorySignList(){
    this.zrServices.getSignByCourseId(this.courseId).then(async (result:any) => {
      // console.log('here',result);
      if(result.code == '200'){
        this.signCount = result.data.length

        for(let r of result.data){
          let s = {
            signId : r.signId,
            createDate : r.endTime,
            courseMembersCount: this.courseMembersCount,
            signCount : r.signedNumbers
          }
          this.historySignList.push(s)  // 重构每次签到列表
        }
      }
    }).catch((error) => {
      console.log('获取签到列表失败');
    })
  }

  // 点击签到出发
  doSignIn(){
    let url = '/create-classes/sign-in-teacher/sign-in/'
    this.router.navigate([url],{
      queryParams:{
        courseId:this.courseId,
        courseName:this.courseName,
        courseMembersCount:this.courseMembersCount
      }
    })
  }

}
