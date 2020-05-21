import { Component, OnInit } from '@angular/core';
import { MylocalstorageService } from 'src/app/shared/services/mylocalstorage.service';
import { NavController, AlertController, LoadingController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.page.html',
  styleUrls: ['./welcome.page.scss'],
})
export class WelcomePage implements OnInit {
  
  constructor(private localStorageService: MylocalstorageService,
    public navCtrl: NavController,public router:Router,public alertController: AlertController,public loadingController: LoadingController) { }

  ngOnInit() {
   
  }
  ionViewWillEnter(){
    
  }
  ionViewWillLeave() {
    if (this.loadingController !== undefined) {
      this.loadingController.dismiss();
    }
  }
}
