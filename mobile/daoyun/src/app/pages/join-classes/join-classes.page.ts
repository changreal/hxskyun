import { Component, OnInit } from '@angular/core';
// import { PopoverComponent } from './components/popover/popover.component';
import { ZrServicesService } from "../../shared/services/zr-services.service";
// import { ToastServiceProvider } from "../../shared/services/toast-service.service";

@Component({
  selector: 'app-join-classes',
  templateUrl: './join-classes.page.html',
  styleUrls: ['./join-classes.page.scss'],
})
export class JoinClassesPage implements OnInit {

  userId:any = '123123123'
  courseId:any
  role:any  // 身份


  courses:any[];
  courses_length = 0


  constructor(private zrServices: ZrServicesService,
    ) {}

  ngOnInit() {
    this.loadCourseData()
  }

  loadCourseData(){
    this.zrServices.getCourseById(this.userId).then((result:any) => {
      // console.log('根据用户号，获取该用户已加入的课程列表', result);
      if (result.code =='200') {
        this.courses = result.data
        this.courses_length = this.courses.length
      }else{
        console.log(result.msg);
      }
    }).catch(async (error)=>{
      console.log('请求课程列表出现错误：', error);
    })
    
  }

  // async presentPopover(ev: any) {
  //   const popover = await this.popoverController.create({
  //     component: PopoverComponent,
  //     event: ev,
  //     translucent: true
  //   });
  //   return await popover.present();
  // }


    
}
