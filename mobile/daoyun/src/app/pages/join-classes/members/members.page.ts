import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ZrServicesService } from "../../../shared/services/zr-services.service";

@Component({
  selector: 'app-members',
  templateUrl: './members.page.html',
  styleUrls: ['./members.page.scss'],
})
export class MembersPage implements OnInit {

  // 临时变量
  userId:any = '123123123'
  // 变量
  courseId:string
  courseName:string
  members:any[];
  members_count:string
  myInfo:any[];


  constructor(private activatedRoute: ActivatedRoute,
    private zrServices: ZrServicesService,) { }

  ngOnInit() {
    this.activatedRoute.queryParams.subscribe((result:any)=>{
      console.log('result:',result);
      this.courseId = result.courseId
      this.courseName = result.courseName
    })
    this.getMyCourseExpInfo()
    this.loadMembers() // 获取该课程成员列表
  }

  loadMembers(){

    this.zrServices.getMembersByCourseId(this.courseId).then((result:any) => {
      console.log(this.courseName, '课程结果为：', result);
      
      this.members_count = result.data.length
      this.members = result.data
      // 排序
      this.members.sort((a: any, b: any) => {
        return b.studentExp - a.studentExp;//大到小
      })
      
    }).catch((error) => {
      console.log('获取', this.courseName, '课程信息失败')
    })

  }

  getMyCourseExpInfo(){
    let params:object = {
      "courseId" : this.courseId,
      "studentId" : this.userId
    }
    this.zrServices.getMemberCourseExpInfo(params).then((result:any) => {
      console.log('查询改用户的课程经验值为：',result.data);
      this.myInfo = result.data[0]
      console.log(this.myInfo);
      
    }).catch((error) => {
      console.log('获取用户该课程的经验值失败')
    })

  }

  

}
