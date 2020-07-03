import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ZrServicesService } from "../../../shared/services/zr-services.service";
import { LocalStorageService } from "../../../shared/services/local-storage.service";
import { ToastServiceProvider } from "../../../shared/services/toast-service.service";
import { EventService } from "../../../shared/services/event.service";
import { LoadingController } from '@ionic/angular';
import { BaseUI } from 'src/app/common/baseui';

@Component({
  selector: 'app-members',
  templateUrl: './members.page.html',
  styleUrls: ['./members.page.scss'],
})
export class MembersPage extends BaseUI  implements OnInit {

  userId = ''
  courseId = ''
  courseName = ''
  
  members:any[];
  members_count = ''
  sort_flag = true // 默认按经验值绑定
  courseStatus=''
  constructor(private activatedRoute: ActivatedRoute,
    private zrServices: ZrServicesService,
    private localStorageService: LocalStorageService,
    private toastService: ToastServiceProvider,
    private router: Router,
    public eventService: EventService,
    public loadingController: LoadingController
    ) { 
      super()
    }

  ngOnInit() {
    this.activatedRoute.queryParams.subscribe((result) => {
      this.courseId = result.courseId;
      this.courseName = result.courseName
    })
    this.loadCourseInfo()
    this.loadMembers(null)
    super.showLoading( this.loadingController,'请等待',800)

  }

  ionViewWillEnter(){
    this.activatedRoute.queryParams.subscribe((result) => {
      this.courseId = result.courseId;
      this.courseName = result.courseName
    })
    this.eventService.event.on('memberupdate', () => {
      this.loadCourseInfo();
      this.loadMembers(null)
      super.showLoading( this.loadingController,'请等待',800)
      
    })

  }


  

  // ionViewWillEnter() {
  //   this.activatedRoute.queryParams.subscribe((result) => {
  //     this.courseId = result.courseId;
  //     this.courseName = result.courseName
  //   })
  //   this.loadCourseInfo()
  //   this.loadMembers(null) 
  // }

  // 获取课程信息
  loadCourseInfo(){
    // 根据id获取该班课的信息
    this.zrServices.getCourseByCourseId(this.courseId).then(async (result:any) => {
      // console.log(result);
      
      if(result.code == '200'){
        this.courseStatus = result.data.endClassStatus
        
      }
    }).catch((error) => {
      console.log('查找班课信息失败', error);
    })
  }

  loadMembers(event){
    this.zrServices.getMembersByCourseId(this.courseId).then((result:any) => {
      // console.log( '成员返回为：', result);
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
  // 切换显示
  toggleShow(){
    this.sort_flag = !this.sort_flag
    this.sortMembers()
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
