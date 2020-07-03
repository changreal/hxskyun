import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ZrServicesService } from "../../../shared/services/zr-services.service";
import { LoadingController } from '@ionic/angular';
import { BaseUI } from 'src/app/common/baseui';

@Component({
  selector: 'app-members',
  templateUrl: './members.page.html',
  styleUrls: ['./members.page.scss'],
})
export class MembersPage extends BaseUI implements OnInit {

  // 临时变量
  userId:any = '123123123'
  // 变量
  courseId:string
  courseName:string
  members:any[];
  members_count:string
  myInfo:any[];


  constructor(private activatedRoute: ActivatedRoute,
    private zrServices: ZrServicesService,
    public loadingController: LoadingController
    ) { 
      super()
    }

  ngOnInit() {
    this.activatedRoute.queryParams.subscribe((result:any)=>{
      // console.log('result:',result);
      this.courseId = result.courseId
      this.courseName = result.courseName
    })
    super.showLoading( this.loadingController,'请等待',800)
    // this.getMyCourseExpInfo()
    this.loadMembers(null) // 获取该课程成员列表
  }

  loadMembers(event){

    this.zrServices.getMembersByCourseId(this.courseId).then((result:any) => {
      // console.log(this.courseName, '课程结果为：', result);
      
      this.members_count = result.data.length
      this.members = result.data
      
      // 排序
      this.members.sort((a: any, b: any) => {
        return b.studentExp - a.studentExp;//大到小
      })
      
    }).catch((error) => {
      // console.log('获取', this.courseName, '课程信息失败')
    }).finally(()=>{
      if(event != null){
        event.target.complete()
      }
    })

  }

  getMyCourseExpInfo(){
    // console.log('here:', this.courseId, this.userId);
    
    let params:object = {
      "courseId" : this.courseId, //1
      "studentId" : this.userId //123123123
    }
    this.zrServices.getMemberCourseExpInfo(params).then((result:any) => {
      console.log('查询改用户的课程经验值为：',result);
      this.myInfo = result.data[0]
    }).catch((error) => {
      console.log('获取用户该课程的经验值失败')
    })

  }

  

}
