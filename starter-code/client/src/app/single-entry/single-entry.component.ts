import { Component, OnInit } from '@angular/core';
import { EntryService } from '../../services/entry.service';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import "rxjs/add/operator/mergeMap";

@Component({
  selector: 'app-single-entry',
  templateUrl: './single-entry.component.html',
  styleUrls: ['./single-entry.component.css']
})

export class SingleEntryComponent implements OnInit {

  entry:any;
  constructor(public route: ActivatedRoute, public entryServ: EntryService ) {
    route.params
    .mergeMap( (ent:any) => entryServ.getEntry(ent.id) )
    .subscribe( entry => {
      console.log(entry);
      this.entry=entry;
    });
  }

  ngOnInit(){

  }

}
