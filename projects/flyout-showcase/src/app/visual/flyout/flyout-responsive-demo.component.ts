import { Component } from '@angular/core';
import { SkyFlyoutService } from 'projects/flyout/src/public-api';

@Component({
  selector: 'app-flyout-responsive-demo',
  templateUrl: './flyout-responsive-demo.component.html',
  providers: [SkyFlyoutService],
})
export class FlyoutResponsiveDemoComponent {
  constructor() {}
}
