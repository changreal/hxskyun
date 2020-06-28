import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ZrServicesService } from "../../../shared/services/zr-services.service";



@Component({
  selector: 'app-join-class',
  templateUrl: './join-class.page.html',
  styleUrls: ['./join-class.page.scss'],
})
export class JoinClassPage implements OnInit {
    cousreId:any
  constructor(private activatedRoute: ActivatedRoute,
              private zrServices: ZrServicesService,
    ) { }

  ngOnInit() {
    this.activatedRoute.queryParams.subscribe((result) => {
      console.log('传入的参数');
      
    })
  }

}
