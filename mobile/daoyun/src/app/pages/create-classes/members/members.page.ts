import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ZrServicesService } from "../../../shared/services/zr-services.service";
import { LocalStorageService } from "../../../shared/services/local-storage.service";
import { ToastServiceProvider } from "../../../shared/services/toast-service.service";

@Component({
  selector: 'app-members',
  templateUrl: './members.page.html',
  styleUrls: ['./members.page.scss'],
})
export class MembersPage implements OnInit {

  courseId = '1'
  courseName = '工程训练'
  
  members:any[];
  members_count = ''
  sort_flag = true // 默认按经验值绑定
  constructor(private activatedRoute: ActivatedRoute,
    private zrServices: ZrServicesService,
    private localStorageService: LocalStorageService,
    private toastService: ToastServiceProvider,
    private router: Router) { }

  ngOnInit() {
    this.activatedRoute.queryParams.subscribe((result) => {
      console.log('传入的参数：', result);
      this.courseId = result.courseId;
    })

    this.loadMembers(null)

  }

  loadMembers(event){
    this.courseId = '1'
    this.zrServices.getMembersByCourseId(this.courseId).then((result:any) => {
      console.log( '成员返回为：', result);
      this.members = result.data
      this.members_count = result.data.length
      // 排序
      this.sortMembers()
      
    }).catch((error) => {
      console.log('获取', this.courseName, '课程信息失败')
    }).finally(()=>{
      if(event != null){
        event.target.complete()
      }
    })

  }

  sortMembers(){
    if(this.sort_flag == true){
      this.members.sort((a: any, b: any) => {
        return b.studentExp - a.studentExp;//经验值大到小
      })
    }else{
      this.members.sort((a: any, b: any) => {
        return a.studentId - b.studentId;//学号小到大
      })
    }

  }




}
