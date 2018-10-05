import {
  NgModule
} from '@angular/core';

import {
  NoopAnimationsModule
} from '@angular/platform-browser/animations';

import {
  SkyFlyoutModule,
  SkyFlyoutService
} from './public';

import {
  FlyoutDemoComponent
} from './visual/flyout/flyout-demo.component';

@NgModule({
  declarations: [],
  imports: [
    NoopAnimationsModule,
    SkyFlyoutModule
  ],
  exports: [
    SkyFlyoutModule
  ],
  providers: [
    SkyFlyoutService
  ],
  entryComponents: [
    FlyoutDemoComponent
  ]
})
export class AppExtrasModule { }
