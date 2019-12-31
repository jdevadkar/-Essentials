import { Pipe, PipeTransform } from "@angular/core";
/**
 * This is custom Duration pipe class.
 */
@Pipe({ name: 'duration' })
export class DurationPipe implements PipeTransform {

  /**
   * This is transform method.
   * @param value
   */
  transform(value: number) {
    switch (value) {
      case 1: return 'Half Hour';
      case 2: return 'One Hour';
      case 3: return 'Half Day';
      case 4: return 'Full Day';
      default: return value.toString();
    }
  }
}
