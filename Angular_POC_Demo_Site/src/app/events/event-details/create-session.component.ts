import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { ISession, restrictWords } from '../shared';

@Component({
  selector: 'app-create-session',
  templateUrl: './create-session.component.html',
  styles: [`
    em {float:right; color:#E05C65; padding-left:10px;}
    .error input, .error select, .error textarea {background-color:#E3C3C5; }
    .error ::-webkit-input-placeholder {color: #999; }
    .error ::-moz-placeholder { color: #999;}
    .error :-moz-placeholder { color:#999;}
    .error :ms-input-placeholder {color:#999 }
  `]
})
/**
 * The Create session component class.
 */
export class CreateSessionComponent implements OnInit {
  @Output() saveNewSession = new EventEmitter();
  @Output() cancelAddSession = new EventEmitter();
  // Define form controls and  group.
  newSessionForm: FormGroup;
  name: FormControl;
  presenter: FormControl;
  duration: FormControl;
  level: FormControl;
  abstract: FormControl;
  /**
   * The ngOnInit method.
   */
  ngOnInit() {
    // Initilize varibles.
    this.name = new FormControl('', Validators.required);
    this.presenter = new FormControl('', Validators.required);
    this.duration = new FormControl('', Validators.required);
    this.level = new FormControl('', Validators.required);
    this.abstract = new FormControl('', [Validators.required, Validators.maxLength(400), restrictWords(['foo', 'bar'])]);

    this.newSessionForm = new FormGroup({
      name: this.name,
      presenter: this.presenter,
      duration: this.duration,
      level: this.level,
      abstract: this.abstract
    });
  }

  /**
   * The save  session method.
   * @param formValues
   */
  saveSession(formValues) {
    const session: ISession = {
      id: undefined,
      name: formValues.name,
      duration: formValues.duration,
      level: formValues.duration,
      presenter: formValues.presenter,
      abstract: formValues.abstract,
      voters: []
    };
    this.saveNewSession.emit(session);
  }

  /**
   * The cancel method.
   */
  cancel() {
    this.cancelAddSession.emit();
  }
}
