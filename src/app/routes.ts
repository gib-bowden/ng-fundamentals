import { Routes } from '@angular/router'
import { EventsListComponent } from "./Events/events-list.component";
import { EventDetailsComponent } from "./Events/event-details/event-details.component";
import { CreateEventComponent } from './Events/create-event.component';
import { Error404Component } from './Errors/404.component';
import { EventRouteActivator } from './Events/event-details/event-route-activator.service';
import { EventListResolver } from './Events/events-list-resolver.service';


export const appRoutes:Routes = [
    {path: 'events/new', component: CreateEventComponent, canDeactivate:['canDeactivateCreateEvent']},
    {path: 'events', component: EventsListComponent, resolve:{events:EventListResolver}},
    {path: 'events/:id', component: EventDetailsComponent, canActivate: [EventRouteActivator]},
    {path: '404', component: Error404Component},
    {path: '', redirectTo: '/events', pathMatch: 'full'}
]