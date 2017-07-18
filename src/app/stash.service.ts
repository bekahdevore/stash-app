import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class StashService {

   constructor(private http: Http) { }

  getAllStash() {
    return new Promise((resolve, reject) => {
      this.http.get('/stash')
        .map(res => res.json())
        .subscribe(res => {
          resolve(res);
        }, (err) => {
          reject(err);
        });
    });
  }

  showStash(id) {
    return new Promise((resolve, reject) => {
        this.http.get('/stash/' + id)
          .map(res => res.json())
          .subscribe(res => {
            resolve(res)
        }, (err) => {
          reject(err);
        });
    });
  }

  saveStash(data) {
    return new Promise((resolve, reject) => {
        this.http.post('/stash', data)
          .map(res => res.json())
          .subscribe(res => {
            resolve(res);
          }, (err) => {
            reject(err);
          });
    });
  }

  updateStash(id, data) {
    return new Promise((resolve, reject) => {
        this.http.put('/stash/'+id, data)
          .map(res => res.json())
          .subscribe(res => {
            resolve(res);
          }, (err) => {
            reject(err);
          });
    });
  }

  deleteStash(id) {
    return new Promise((resolve, reject) => {
        this.http.delete('/stash/'+id)
          .subscribe(res => {
            resolve(res);
          }, (err) => {
            reject(err);
          });
    });
  }

}
