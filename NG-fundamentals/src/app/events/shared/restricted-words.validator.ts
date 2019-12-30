import { FormControl } from '@angular/forms'
/**
 * This is restrict words function.
 * @param words
 */
export function restrictWords(words) {
  return (control: FormControl): { [key: string]: any } => {
    if (!words) return null

    var invalidWords = words
      .map(w => control.value.includes(w) ? w : null)
      .filter(w => w != null)
    return invalidWords && invalidWords.length > 0
      ? { 'restrictWords': invalidWords.join(', ') }
      : null
  }
}
