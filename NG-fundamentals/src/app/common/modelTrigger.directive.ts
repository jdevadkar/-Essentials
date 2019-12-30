import { Directive, OnInit, Inject, ElementRef, Input } from '@angular/core';
import { JQ_TOKEN } from './jQuery.service';

@Directive({
  selector: '[modal-trigger]',
})

/**
 * This is mode Trigger Directive class.
 */
export class ModelTriggerDirective implements OnInit {
  private el: HTMLElement;
  @Input('modal-trigger') modalId: string;
  /**
   * Create instance.
   * @param ref
   * @param $
   */
  constructor(ref: ElementRef, @Inject(JQ_TOKEN) private $: any) {
    this.el = ref.nativeElement;
  }
  /**
   * This is nginInit method.
   */
  ngOnInit() {
    this.el.addEventListener('click', e => {
      this.$(`#${this.modalId}`).modal({});
    });
  }
}
