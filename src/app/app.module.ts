import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { EventsAppComponent } from './events-app.component';
import { EventsListComponent } from './Events/events-list.component';
import { EventThumbnailComponent } from './Events/event-thumbnail.component';
import { NavbarComponent } from './Nav/navbar.component';
import { EventService } from './Events/Shared/event.service';
import { ToastrService } from './Common/toastr.service';
import { EventDetailsComponent } from './Events/event-details/event-details.component';


@NgModule({
  declarations: [
    EventDetailsComponent,
    EventsAppComponent,
    EventsListComponent,
    EventThumbnailComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    EventService,
    ToastrService
  ],
  bootstrap: [EventsAppComponent]
})
export class AppModule { }
