import { Component, OnInit } from '@angular/core';
// 引入popover
import { PopoverController } from '@ionic/angular';
// import { PopoverComponent } from './components/popover/popover.component';
import { PopoverComponent } from '../components/popover/popover.component';


@Component({
  selector: 'app-join-classes',
  templateUrl: './join-classes.page.html',
  styleUrls: ['./join-classes.page.scss'],
})
export class JoinClassesPage implements OnInit {

  courses:any[]=[
    {
      courseId:0,
      subject: '工程实践',
      school: '福州大学',
      userName:'池芝标',
      class: '2019级工硕'
    },
    {
      courseId:1,
      subject: '软件工程',
      school: '福州大学',
      userName:'标芝池',
      class: '2019级工硕'
    },
  ];

  constructor(public popoverController: PopoverController) {}

  ngOnInit() {
  }

  async presentPopover(ev: any) {
    const popover = await this.popoverController.create({
      component: PopoverComponent,
      event: ev,
      translucent: true
    });
    return await popover.present();
  }


    
}
