import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ZrServicesService } from "../../../shared/services/zr-services.service";



@Component({
  selector: 'app-class-detail',
  templateUrl: './class-detail.page.html',
  styleUrls: ['./class-detail.page.scss'],
})
export class ClassDetailPage implements OnInit {

  courseId:string
  hasThisClass:boolean = false
  submited = false
  // 班课信息
  courseMajor:string;
  courseName:string
  courseDepartment:string
  courseSchool:string
  courseTeacherName:string

  constructor(private activatedRoute: ActivatedRoute,
              private zrServices: ZrServicesService,) {
    

  }

  ngOnInit() {
    this.activatedRoute.queryParams.subscribe((result:any)=>{
      this.courseId = result.courseId
      
    })

    this.loadCourseInfo()
    
  }

  loadCourseInfo(){

    this.zrServices.getCourseByCourseId(this.courseId).then(async (result:any) => {
      console.log('here:', result.data);
      if(result.success){
        this.hasThisClass = true
        this.courseName = result.data.courseName
        this.courseMajor = result.data.major
        this.courseSchool = result.data.school
        this.courseTeacherName = result.data.teacherName
        this.courseDepartment = result.data.department
      }
    
    }).catch((error) => {
      console.log('获取课程信息失败', error)
    })
    
    
  }

}
