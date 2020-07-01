import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ZrServicesService } from "../../../shared/services/zr-services.service";
import { LocalStorageService } from "../../../shared/services/local-storage.service";


@Component({
  selector: 'app-sign-in-teacher',
  templateUrl: './sign-in-teacher.page.html',
  styleUrls: ['./sign-in-teacher.page.scss'],
})
export class SignInTeacherPage implements OnInit {

  courseMembersCount = ''
  signCount = '1'
  
  // 发起签到所需变量
  courseId = ''


  // 签到列表
  historySignList:any[] = [
    {
      signId : '1',
      createDate: new Date('2020-05-11'),
      courseMembersCount: this.courseMembersCount,
      signCount: '16'
    },
    {
      signId : '2',
      createDate: new Date('2020-04-11'),
      courseMembersCount: this.courseMembersCount,
      signCount: '7'
    },
  ]
  constructor(private activatedRoute: ActivatedRoute,
    private zrServices: ZrServicesService,
    private localStorageService: LocalStorageService,
    private router: Router,
    ) { }

  ngOnInit() {
    this.activatedRoute.queryParams.subscribe((result) => {
      console.log('传入的参数：', result);
      this.courseId = result.courseId;
      this.courseMembersCount = result.courseMembersCount
    })
    this.loadHistorySignList()
  }

  // 获取历史签到记录列表
  loadHistorySignList(){
    this.zrServices.getSignByCourseId(this.courseId).then(async (result:any) => {
      console.log('here',result);
      if(result.code == '200'){
        this.signCount = result.data.length

        for(let r of result.data){
          let s = {
            signId : r.signId,
            createDate : r.createDate,
            courseMembersCount: this.courseMembersCount,
            signCount : r.signCount
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
        courseMembersCount:this.courseMembersCount
      }
    })
  }

}
