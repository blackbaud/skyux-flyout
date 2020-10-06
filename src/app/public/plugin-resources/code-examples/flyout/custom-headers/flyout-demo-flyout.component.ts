import {
  Component
} from '@angular/core';

@Component({
  selector: 'app-flyout-demo-flyout',
  template: `
    <div
      class="sky-padding-even-large"
    >
      <h2>
        Sample flyout
      </h2>
      <p>
        Flyouts can display large quantities of supplementary information related to a task, including:
      </p>
        <ul>
          <li>lists</li>
          <li>record views</li>
          <li>analytics</li>
          <li>other information</li>
        </ul>
    </div>
  `
})
export class FlyoutDemoFlyoutComponent {}
