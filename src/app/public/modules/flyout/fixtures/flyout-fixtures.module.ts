import {
  NgModule
} from '@angular/core';

import {
  CommonModule
} from '@angular/common';

import {
  NoopAnimationsModule
} from '@angular/platform-browser/animations';

import {
  RouterTestingModule
} from '@angular/router/testing';

import {
  SkyLibResourcesService
} from '@skyux/i18n';

import {
  SkyLibResourcesTestService
} from '@skyux/i18n/testing';

import { SkyFlyoutModule } from '../flyout.module';
import { SkyFlyoutTestComponent } from './flyout.component.fixture';
import { SkyFlyoutTestSampleComponent } from './flyout-sample.component.fixture';
import { SkyFlyoutHostsTestComponent } from './flyout-hosts.component.fixture';
import { SkyModalModule } from '@skyux/modals/modules/modal';
import { SkyFlyoutModalFixtureFormComponent } from './flyout-modal-form.component';
import { SkyToastModule } from '@skyux/toast/modules/toast';

@NgModule({
  declarations: [
    SkyFlyoutTestComponent,
    SkyFlyoutTestSampleComponent,
    SkyFlyoutHostsTestComponent,
    SkyFlyoutModalFixtureFormComponent
  ],
  imports: [
    CommonModule,
    NoopAnimationsModule,
    RouterTestingModule,
    SkyFlyoutModule,
    SkyModalModule,
    SkyToastModule
  ],
  exports: [
    SkyFlyoutTestSampleComponent,
    SkyFlyoutHostsTestComponent,
    SkyFlyoutModalFixtureFormComponent
  ],
  entryComponents: [
    SkyFlyoutTestSampleComponent,
    SkyFlyoutHostsTestComponent,
    SkyFlyoutModalFixtureFormComponent
  ],
  providers: [
    {
      provide: SkyLibResourcesService,
      useClass: SkyLibResourcesTestService
    }
  ]
})
export class SkyFlyoutFixturesModule { }
