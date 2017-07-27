
import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import {environment} from '../environments/environment';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';


@Injectable()
export class EntryService{
BASE_URL:string = environment.baseURL;

  constructor(private http: Http) { }

  getEntries(): Observable<any> {
    return this.http.get(`${this.BASE_URL}/api/journal-entries`)
      .map((res) => res.json())
  }
  getEntry(id) {
     return this.http.get(`${this.BASE_URL}/api/journal-entries/${id}`)
       .map((res) => res.json());
   }
}
