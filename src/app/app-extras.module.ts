import {
  NgModule
} from '@angular/core';

import {
  NoopAnimationsModule
} from '@angular/platform-browser/animations';

import {
  SkyRepeaterModule,
  SkyInfiniteScrollModule
} from '@skyux/lists';

import {
  SkyModalModule
} from '@skyux/modals';

import {
  SkyDropdownModule
} from '@skyux/popovers';

import {
  SkyToastModule
} from '@skyux/toast';

import {
  SkyFlyoutModule
} from './public';

import {
  FlyoutDemoComponent
} from './visual/flyout/flyout-demo.component';

import {
  SkyFlyoutModalDemoComponent
} from './visual/flyout/flyout-modal.component';

@NgModule({
  imports: [
    NoopAnimationsModule,
    SkyRepeaterModule,
    SkyInfiniteScrollModule
  ],
  exports: [
    SkyFlyoutModule,
    SkyDropdownModule,
    SkyModalModule,
    SkyToastModule,
    SkyRepeaterModule,
    SkyInfiniteScrollModule
  ],
  entryComponents: [
    FlyoutDemoComponent,
    SkyFlyoutModalDemoComponent
  ]
})
export class AppExtrasModule { }
