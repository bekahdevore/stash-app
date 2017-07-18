import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StashService } from '../stash.service';

@Component({
  selector: 'app-stash-create',
  templateUrl: './stash-create.component.html',
  styleUrls: ['./stash-create.component.css']
})
export class StashCreateComponent implements OnInit {
  
  stash = {};

constructor(private stashService: StashService, private router: Router) { }

  showId = false;
  
  ngOnInit() {
  }

  saveStash() {
    this.stashService.saveStash(this.stash).then((result) => {
      let id = result['_id'];
      this.router.navigate(['/stash-details', id]);
    }, (err) => {
      console.log(err);
    });
  }
  toggleId(){
    this.showId = !this.showId;
  }

}
