import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { EventsAppComponent } from './events-app.component';
import { EventsListComponent } from './Events/events-list.component';
import { EventThumbnailComponent } from './Events/event-thumbnail.component';
import { NavbarComponent } from './Nav/navbar.component';
import { EventService } from './Events/Shared/event.service';
import { ToastrService } from './Common/toastr.service';
import { EventDetailsComponent } from './Events/event-details/event-details.component';
import { RouterModule } from '@angular/router';
import { appRoutes } from './routes';
import { CreateEventComponent } from './Events/create-event.component';
import { Error404Component } from './Errors/404.component';
import { EventRouteActivator } from './Events/event-details/event-route-activator.service';
import { componentFactoryName } from '@angular/compiler';


@NgModule({
  declarations: [
    EventDetailsComponent,
    EventsAppComponent,
    EventsListComponent,
    EventThumbnailComponent,
    NavbarComponent,
    CreateEventComponent,
    Error404Component
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    EventService,
    ToastrService,
    EventRouteActivator,
    {provide: 'canDeactivateCreateEvent', useValue: checkDirtyState }
  ],
  bootstrap: [EventsAppComponent]
})
export class AppModule { 
  
}

export function checkDirtyState(component:CreateEventComponent) {
  if (component.isDirty) {
    return window.confirm("do you want to navigate away?")
  }
  else return true; 
}