import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MylocalstorageService } from 'src/app/shared/services/mylocalstorage.service';

@Component({
  selector: 'app-yuanxi',
  templateUrl: './yuanxi.page.html',
  styleUrls: ['./yuanxi.page.scss'],
})
export class YuanxiPage implements OnInit {
  school:any
  yx:any
  filteryx:any
  public user={
    value:null
  }
  constructor(private activatedRoute: ActivatedRoute,public localStorageService:MylocalstorageService,public router:Router
    ) {
    this.school=this.localStorageService.get('school','')
    // this.yx=this.school.name
    this.yx=this.school.YX
    console.log(this.school)
    console.log('yx'+this.yx)
   }

   getItems(e) {
    
  }
  getValue(){
    console.log('我选中的是', this.user.value)
  }
  ngOnInit() {
  }
  chooseSuc(){
    this.localStorageService.set('schooAandmajor', {
      colleage: this.school.name,
      major:this.user.value,
    })
    this.localStorageService.remove('school')
    this.router.navigateByUrl('/mine/user-info')
  }
}
