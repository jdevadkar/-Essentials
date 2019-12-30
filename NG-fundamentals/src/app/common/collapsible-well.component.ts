import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-collapsible-well',
  template: `
    <div (click)="toggleContent()" class="well pointable">
      <h4>
        <ng-content select="[well-title]"></ng-content>

      </h4>
      <ng-content *ngIf="visible" select="[well-body]"></ng-content>
    </div>
  `
})
/**
 * This is collapsible well component class.
 */
export class CollapsibleWellComponent {
  visible = true;
  /**
   * This is toggle content method.
   */
  toggleContent() {
    this.visible = !this.visible;
  }
}
