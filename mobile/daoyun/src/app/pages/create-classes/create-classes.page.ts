import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ZrServicesService } from "../../shared/services/zr-services.service";
import { LocalStorageService } from "../../shared/services/local-storage.service";
import { ToastServiceProvider } from "../../shared/services/toast-service.service";
import { EventService } from 'src/app/shared/services/event.service';


@Component({
  selector: 'app-create-classes',
  templateUrl: './create-classes.page.html',
  styleUrls: ['./create-classes.page.scss'],
})
export class CreateClassesPage implements OnInit {

  result:any = {
    courses:[
      {
      courseId : 8,
      courseName: '工程实践',
      courseCode:'123456',
      major:'2019级工硕（班级名）1班',
      courseDate:'2019-2020-2'
      },
      {
        courseId : 9,
        courseName: '工程实践',
        courseCode:'654321',
        major:'2019级工硕（班级名）2班',
        courseDate:'2019-2020-2'
      },
      {
        courseId : 10,
        courseName: '智能技术',
        courseCode:'112233',
        major:'2019级工硕（班级名）',
        courseDate:'2019-2020-2'
      },
    ],
    teacherName:'池芝标',
    // teacherId:1
  }
  courses:any[] = this.result.courses
  courses_length=0
  userId:string=''
  role:string=''


  constructor(private activatedRoute: ActivatedRoute,
              private zrServices: ZrServicesService,
              private localStorageService: LocalStorageService,
              private toastService: ToastServiceProvider,
              private router:Router,
              public eventService:EventService) {
    

                
  }

  ngOnInit() {
    this.role = this.localStorageService.getStore('roleId','2')
    this.userId = this.localStorageService.getStore('uid', null)

    console.log('当前身份是：', this.role);
    console.log('当前用户id是：', this.userId);
    

    // 判断身份
    if(this.role == '2' || this.role=='1'){
      this.loadCourseData()
    }else{
      // 不是教师或者管理员身份的话没有此权限
      this.courses_length = 0
      this.toastService.presentAlert('您没有此权限！')
    }
    
  }

  ionViewWillEnter() {
  }

  

  loadCourseData(){

    // this.userId = this.localStorageService.getStore('userId', null)
    // this.role = this.localStorageService.getStore('role','student')
    
    // 获取数据前再判断一次身份
    this.zrServices.getCreatedCourseById(this.userId).then((result:any) => {
      console.log('根据用户号，获取该用户已加入的课程列表', result);
      if (result.code =='200') {
        this.courses = result.data
        this.courses_length = this.courses.length
      }else{
        console.log(result.msg);
      }
    }).catch(async (error)=>{
      console.log('请求教师创建的课程列表出现错误：', error);
    })
  }

  // 加入班课触发事件
  doCreateCourse(){
    let url = "/create-classes/create-class"
    if(this.role == '1' || this.role == '2'){
      this.router.navigate([url]);
    }else{
      // 学生创建班课权限
      this.toastService.presentAlert('您没有此权限！')
    }

  }


}
