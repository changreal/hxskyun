import { Component, OnInit } from '@angular/core';
import { ActionSheetController } from '@ionic/angular';

@Component({
  selector: 'app-headfaces',
  templateUrl: './headfaces.page.html',
  styleUrls: ['./headfaces.page.scss'],
})
export class HeadfacesPage implements OnInit {

  constructor(public actionSheetController: ActionSheetController) { }

  ngOnInit() {
  }
 async selectActionSheet(){
  const actionSheet = await this.actionSheetController.create({
    header: '选择图片',
    buttons: [{
      text: '从相册中选择',
      handler: () => {
        console.log('相册in');
      }
    }, {
      text: '使用相机',
      handler: () => {
        console.log('相机in');
      }
    }, {
      text: '取消',
      handler: () => {
        console.log('取消');
      }
    }]
  });
  await actionSheet.present();
}

  uploadImage(){

  }

}
