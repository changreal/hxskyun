import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-members',
  templateUrl: './members.page.html',
  styleUrls: ['./members.page.scss'],
})
export class MembersPage implements OnInit {

  members:any[]=[
    {
      userId: '190388888',
      userName:'张三',
      exp: '58',
    },
    {
      userName:'李四',
      userId: '190388880',
      exp: '48',
    },
  ];
  constructor() { }

  ngOnInit() {
  }

}
