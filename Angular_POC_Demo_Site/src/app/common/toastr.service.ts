import { InjectionToken } from '@angular/core';

export let TOASTR_TOKEN = new InjectionToken<any>('toastr');
/**
 * This is Toastr interface. declare its properties.
 */
export interface Toastr {
  success(msg: string, tilte?: string): void;
  info(msg: string, tilte?: string): void;
  warning(msg: string, tilte?: string): void;
  error(msg: string, tilte?: string): void;
}
