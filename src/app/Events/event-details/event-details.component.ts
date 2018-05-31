import {Component, OnInit} from '@angular/core'
import { EventService } from '../Shared/event.service';
import { ActivatedRoute } from '@angular/router';
import { IEvent, ISession } from '..';


@Component({
    templateUrl: './event-details.component.html',
    styles: [`
        .container { padding-left: 20px; padding-right: 20px; },
        .event-image { height: 100px; }
        a {cursor: pointer;}
    `]
})

export class EventDetailsComponent implements OnInit {
    event:IEvent
    addMode:boolean

    constructor(private eventService:EventService, private route:ActivatedRoute){
        
    }

    ngOnInit() {
        this.event = this.eventService.getEvent(+this.route.snapshot.params['id']);
        this.event.imageUrl = this.event.imageUrl.replace('/app',''); 
    }

    addSession() {
        this.addMode = true; 
    }

    saveNewSession(newSession:ISession):void {
        const lastId = Math.max.apply(null, this.event.sessions.map(session => session.id));
        newSession.id = lastId + 1
        this.event.sessions.push(newSession)
        this.eventService.updateEvent(this.event)
        this.addMode = false 
    }

    cancel() {
        this.addMode = false
    }



}