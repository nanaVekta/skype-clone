import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-call',
  templateUrl: './call.page.html',
  styleUrls: ['./call.page.scss'],
})
export class CallPage implements OnInit {

  public pic: any;
  constructor(public activatedRoute: ActivatedRoute) {
    this.pic =  this.activatedRoute.snapshot.paramMap.get('pic');
   }

  ngOnInit() {
  }

}
