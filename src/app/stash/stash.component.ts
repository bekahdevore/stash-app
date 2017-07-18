import { Component, OnInit, ViewChild } from '@angular/core';
import { StashService } from '../stash.service';


@Component({
  selector: 'app-stash',
  templateUrl: './stash.component.html',
  styleUrls: ['./stash.component.css']
})

export class StashComponent implements OnInit {

  stash: any;

  constructor(private StashService: StashService) { }  


  ngOnInit() {
    this.getStashList();
  }

  getStashList() {
    this.StashService.getAllStash().then((res) => {
      this.stash = res;
    }, (err) => {
      console.log(err);
    });
  }

  @ViewChild('child') child;


}
