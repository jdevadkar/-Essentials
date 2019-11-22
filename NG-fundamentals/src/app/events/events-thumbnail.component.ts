import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { IEvent } from './shared';


@Component({
  selector: 'app-event-thumbnail',
  template: `
  <div [routerLink]="['/events',event.id]" class="well hoverwell thumbnail" >
      <h2>{{event?.name | uppercase}}</h2>
      <div>Date: {{event?.date | date: 'shortDate'}}</div>
      <div [ngClass]="{ green: event?.time === '8:00 am', bold:event?.time === '8:00 am'}"  [ngSwitch] ="event?.time">
        Time: {{event?.time}}
        <span *ngSwitchCase="'8:00 am'">(Early start)</span>
        <span *ngSwitchCase= "'10:00 am'">(Late Start)</span>
        <span *ngSwitchDefault>(Normal start)</span>
      </div>
      <div>Price: {{ event?.price | currency: 'USD' }}</div>
      <div *ngIf="event?.location">
        <span>Location:{{event?.location?.address}}</span>

        <span class="pad-left">{{event?.location?.city}}, {{event?.location?.country}}</span>
      </div>
      <div [hidden]="!event?.imageUrl">
        Online URL:{{event?.imageUrl}}
      </div>
      <button class="btn btn-primary" (click) ="handleClickMe()">Click Me!</button>
    </div>
  `,
  styles: [`
  .thumbnail {min-height:210px;}
  .pad-left {margin-left:10px;}
  .green { color: #003300 !important;}
  .bold { font-weight:bold;}

  `]
})

export class EventThumbnailComponent implements OnInit {
  @Input() event: IEvent;
  @Output() eventClick = new EventEmitter();
  sameProperty: any = 'some value';

  constructor() { }
  ngOnInit() { }

  handleClickMe() {
    this.eventClick.emit(this.event.name);
  }
  logFoo() {
    console.log('foo');
  }
}
