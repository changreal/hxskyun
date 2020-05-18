import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { LoginPage } from '../login/login.page';
import { LocalStorageService } from 'src/app/shared/services/local-storage.service';
import { MylocalstorageService } from 'src/app/shared/services/mylocalstorage.service';

@Component({
  selector: 'app-mine',
  templateUrl: './mine.page.html',
  styleUrls: ['./mine.page.scss'],
})
export class MinePage implements OnInit {
  public notLogin: boolean = true
  public logined: boolean = false
  headface: string
  userinfo: string[]

  constructor(public modalController: ModalController,private localStorageService: MylocalstorageService) { }

  ngOnInit() {
  }
  async showModal(){
    let modal =  await this.modalController.create({
      component: LoginPage
    });
    modal.present()
  }

  ionViewWillEnter() {
    this.loadUserPage();
    console.log(this.logined)
  }
  loadUserPage() {
    console.log('load in ')
    let val=this.localStorageService.get('UserId','')
      if(val!=null){
        this.notLogin = false
        this.logined = true
      }        
      else{
        this.notLogin = true
        this.logined = false
      }
    }
  

}
