import { Component, OnInit } from '@angular/core';
import { EntryService } from '../../services/entry.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-entry-list',
  templateUrl: './entry-list.component.html',
  styleUrls: ['./entry-list.component.css']
})
export class EntryListComponent implements OnInit {
  entries:Array<Object>;

  constructor(private entryServ: EntryService) { }

  ngOnInit() {
     this.entryServ.getEntries()
     .subscribe((entries) => this.entries = entries)

  }

}
