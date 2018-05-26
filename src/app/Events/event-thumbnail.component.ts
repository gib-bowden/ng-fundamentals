import {Component, Input, Output, EventEmitter} from '@angular/core'

@Component({
    selector: 'event-thumbnail',
    template: `
    <div class="well hoverwell thumbnail">
        <h2>{{event.name}}</h2>
        <div>Date: {{event.date}}</div>
        <div [ngClass]="getStartTimeClass(event?.time)"[ngSwitch]="event?.time">Time: {{event.time}}
            <span *ngSwitchCase="'8:00 am'">(Early Start)</span>
            <span *ngSwitchCase="'10:00 am'">(Late Start)</span>
            <span *ngSwitchDefault>(Normal Start)</span>        
        </div>
        <div>Price: \${{event.price}}</div>
        <div *ngIf="event.location">
            <span>Location: {{event.location?.address}}</span>
            <span class="pad-left">{{event.location?.city}}, {{event.location?.country}}</span>
        </div>
        <div *ngIf="event.locationUrl">
            Virtual Location: {{event.locationUrl}}
        </div>
    </div>
    `,
    styles: [`
        .green {color: green !important; }
        .bold {font-weight: bold;}
        .pad-left {margin-left: 10px;}
        .well div {color: #bbb;}
        .thumbnail {min-height: 210px;}
    `]
})

export class EventThumbnailComponent {
    @Input() event:any

    getStartTimeClass:object = () => {     
        const isEarly:boolean = this.event && this.event.time === '8:00 am';
        return {green: isEarly, bold: isEarly}; 
    }; 

}