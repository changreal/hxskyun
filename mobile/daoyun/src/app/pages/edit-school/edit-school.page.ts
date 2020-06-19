import { Component, OnInit, ViewChildren, ViewChild } from '@angular/core';
import { CityproviderService } from 'src/app/shared/services/cityprovider.service';
import { IonContent, NavController } from '@ionic/angular';

import { Router } from '@angular/router';
import { MylocalstorageService } from 'src/app/shared/services/mylocalstorage.service';


@Component({
  selector: 'app-edit-school',
  templateUrl: './edit-school.page.html',
  styleUrls: ['./edit-school.page.scss'],
})
export class EditSchoolPage implements OnInit {
  indexes: Array<string> = []
  cities: Array<any> = [];
  filterCities: Array<any> = [];

  @ViewChildren('cityGroup') cityGroup;
  // @ViewChild(Content,{static:false}) content: Content;
  @ViewChild(IonContent,{static:false}) content: IonContent;
  constructor( public navCtrl: NavController,public cityProvider: CityproviderService,public router:Router,
    public localStorageService:MylocalstorageService) { 
    this.indexes = cityProvider.getIndexes();
    this.cities = cityProvider.getGroupCities();
    console.log(this.indexes)
  }
  ionViewDidEnter() {
    console.log("dsfafsdsfaaaaaaaaaaasafff")
    var $this = this;
    function alphabetMove(e, move) {
      var pPositionY = e.changedTouches[0].clientY
      var currentItem, targetItem;
      var d = document;
      currentItem = d.elementFromPoint(d.body.clientWidth - 1, pPositionY);
      if (!currentItem || currentItem.className.indexOf('index-bar') < 0) return;
      targetItem = document.getElementById(currentItem.innerText);
      document.getElementById('indexs-title').style.display = 'block'
      document.getElementById('indexs-title').innerText = currentItem.innerText;
      if (move) {
        var index = $this.indexes.join('').indexOf(currentItem.innerText);
        console.log($this.cityGroup._results[index].el.offsetTop)
        console.log($this.cityGroup._results[index])
        $this.content.scrollToPoint(0, $this.cityGroup._results[index].el.offsetTop, 300);
      }
    }
    var indexsBar = document.getElementById('indexs-bar');
    indexsBar.addEventListener('touchstart', function (e) {
      alphabetMove(e, false);
    });
    indexsBar.addEventListener('touchmove', e => {
      alphabetMove(e, false);
    });
    indexsBar.addEventListener('touchend', function (e) {
      alphabetMove(e, true);
      document.getElementById('indexs-title').style.display = 'none';
    });
  }
 
  citySelect(city) {
    // console.log(JSON.stringify(city));
    // window.localStorage["cache_currentCity"] = JSON.stringify(city);
    this.localStorageService.set('school',city)
    this.router.navigateByUrl('/yuanxi')
   
  }

  getItems(e) {
    var newVal = e.target.value;
    if (newVal) {
      this.filterCities = this.cityProvider.filterCities(newVal);
    }
    else {
      this.filterCities = [];
    }
    this.content.scrollToTop(500);
  }

  ngOnInit() {
    // this.ionViewDidLoad()
  }

}
