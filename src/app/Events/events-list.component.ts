import {Component, OnInit} from '@angular/core'
import { EventService } from './Shared/event.service';
import { ToastrService } from '../Common/toastr.service';

@Component({
    selector: 'events-list',
    template: `
    <div>
        <h1>Upcoming Angular Events</h1>
        <hr>
        <div class="row">
          <div *ngFor="let e of events" class="col-md-5">
            <event-thumbnail (click)="handleThumbnailClick(e.name)" [event]="e"></event-thumbnail>
          </div>
        </div> 
    </div>
    `
})

export class EventsListComponent implements OnInit {
  events:any[]

  constructor(private eventService: EventService, private toastrService : ToastrService) {
     
  }

  ngOnInit() {
    this.events = this.eventService.getEvents();
  }

  handleThumbnailClick(eventName) {
    this.toastrService.success(eventName);  
  }

}