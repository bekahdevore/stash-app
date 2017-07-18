import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { StashService } from '../stash.service';

@Component({
  selector: 'app-stash-detail',
  templateUrl: './stash-detail.component.html',
  styleUrls: ['./stash-detail.component.css']
})

export class StashDetailComponent implements OnInit {

  stash = {};

  constructor(private route: ActivatedRoute, private router: Router, private stashService: StashService) { }

  ngOnInit() {
    this.getStashDetail(this.route.snapshot.params['id']);
  }

  getStashDetail(id) {
    this.stashService.showStash(id).then((res) => {
      this.stash = res;
      console.log(this.stash);
    }, (err) => {
      console.log(err);
    });
  }

   deleteStash(id) {
  this.stashService.deleteStash(id).then((result) => {
    this.router.navigate(['/stash']);
  }, (err) => {
    console.log(err);
  });
  } 

// Add submit to redirect to home

}
