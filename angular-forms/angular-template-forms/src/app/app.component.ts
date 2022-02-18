import { Component } from '@angular/core';
import { User } from './user';
import { EnrollmentService } from './enrollment.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  topics = ['Angular', 'React', 'Vue'];
  userModel = new User('Magesh', 'rob@test.com', 5556665566, 'default', 'morning', true);
  topicHasError = true;
  submitted = false;
  errorMsg = '';

  constructor(private _enrollmentService: EnrollmentService) {}

  validateTopic(value : any) {
    if (value === 'default') {
      this.topicHasError = true;
    } else {
      this.topicHasError = false;
    }
  }

  onSubmit() {
    this.submitted = true;
    this._enrollmentService.enroll(this.userModel)
      .subscribe(
        response => console.log('Success!', response),
        error => this.errorMsg = error.statusText
      )
  }
}
