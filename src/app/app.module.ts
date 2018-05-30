import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {  
  EventsListComponent,
  EventThumbnailComponent,
  EventService,
  EventDetailsComponent,
  CreateEventComponent,
  EventRouteActivator,
  EventListResolver
} from './Events/index'


import { EventsAppComponent } from './events-app.component';
import { NavbarComponent } from './Nav/navbar.component';
import { ToastrService } from './Common/toastr.service';
import { RouterModule } from '@angular/router';
import { appRoutes } from './routes';
import { Error404Component } from './Errors/404.component';
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
    EventListResolver,
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