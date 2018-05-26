import { Injectable } from "@angular/core";
import { Resolve } from "@angular/router";
import { EventService } from "./Shared/event.service";

@Injectable()
export class EventListResolver implements Resolve<any> {
    constructor(private eventService:EventService) {

    }

    resolve() {
       const events = this.eventService.getEvents(); 
       console.log(events);
       return events;
    }
}