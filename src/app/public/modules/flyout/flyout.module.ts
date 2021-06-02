import {
  NgModule
} from '@angular/core';

import {
  CommonModule
} from '@angular/common';

import {
  FormsModule
} from '@angular/forms';

import {
  RouterModule
} from '@angular/router';

import {
  SkyAppWindowRef,
  SkyCoreAdapterService,
  SkyDynamicComponentModule,
  SkyUIConfigService
} from '@skyux/core';

import {
  SkyIconModule
} from '@skyux/indicators';

import {
  SkyI18nModule
} from '@skyux/i18n';

import {
  SkyThemeModule
} from '@skyux/theme';

import {
  SkyFlyoutResourcesModule
} from '../shared/flyout-resources.module';

import {
  SkyFlyoutComponent
} from './flyout.component';

import {
  SkyFlyoutIteratorComponent
} from './flyout-iterator.component';

@NgModule({
  declarations: [
    SkyFlyoutComponent,
    SkyFlyoutIteratorComponent
  ],
  providers: [
    SkyAppWindowRef,
    SkyCoreAdapterService,
    SkyUIConfigService
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    SkyI18nModule,
    SkyIconModule,
    SkyFlyoutResourcesModule,
    SkyDynamicComponentModule,
    SkyThemeModule
  ],
  exports: [
    SkyFlyoutComponent
  ],
  entryComponents: [
    SkyFlyoutComponent
  ]
})
export class SkyFlyoutModule { }
