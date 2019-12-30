import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-upvote',
  styleUrls: ['./upvote.component.css'],
  template: `
    <div class="votingWidgetContainer pointable" (click) ="onClick()">
      <div class="well votingWidget">
        <i  class="glyphicon glyphicon-heart" [style.color]="iconColor"></i>
        <div>
        <div class="badge badge-inverse votingCount">
          <div>{{count}}</div>
        </div>
      </div>
    </div>
  `
})
/**
 * This is up vote component
 */
export class UpvoteComponent {
  @Input() count: number;
  @Input() set voted(val) {
    this.iconColor = val ? 'red' : 'white';
  }
  @Output() vote = new EventEmitter();
  iconColor: string;

  /**
   * This is onClick method. emit the vote.
   */
  onClick() {
    this.vote.emit({});
  }
}
