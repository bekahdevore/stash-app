import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { StashService } from '../stash.service';

@Component({
  selector: 'app-stash-edit',
  templateUrl: './stash-edit.component.html',
  styleUrls: ['./stash-edit.component.css']
})
export class StashEditComponent implements OnInit {

  stash = {};

  constructor(private stashService: StashService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.getStash(this.route.snapshot.params['id']);
  }

  getStash(id) {
    this.stashService.showStash(id).then((res) => {
      this.stash = res;
      console.log(this.stash);
    }, (err) => {
      console.log(err);
    });
  }

  updateStash(id) {
    this.stashService.updateStash(id, this.stash).then((result) => {
      let id = result['_id'];
      this.router.navigate(['/stash-details', id]);
    }, (err) => {
      console.log(err);
    });
  }

}
