import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/observable/forkJoin';

@Injectable()
export class RestModelService {
    url = 'https://jsonplaceholder.typicode.com/users';

  constructor(private http: Http) { }

  getUsers() {
    return this.http.get(this.url)
      .map( (res: Response) => res.json());
  }

  getDetails(userid: number) {
    return this.http.get(`${this.url}/${userid}`)
      .map((res: Response) => res.json())
      .mergeMap(({ website, email }) => {
        return this.http.get(`${this.url}/${userid}/posts`)
            .map(
              (res: Response) => res.json()
            )
            .map(
              posts => posts.slice(0, 3).map(
                ({id, title, body}) => ({id, title, body})
              )
            )
            .map(
              (posts) => ({website, email, posts})
            );
      });
  }
}
