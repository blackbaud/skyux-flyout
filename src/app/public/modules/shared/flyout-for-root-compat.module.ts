import {
  NgModule
} from '@angular/core';

import {
  SkyAppWindowRef,
  SkyCoreAdapterService,
  SkyDynamicComponentService,
  SkyUIConfigService
} from '@skyux/core';

/**
 * @internal
 * @deprecated This module can be removed after we upgrade SKY UX development dependencies to version 5.
 */
 @NgModule({
  providers: [
    SkyAppWindowRef,
    SkyCoreAdapterService,
    SkyDynamicComponentService,
    SkyUIConfigService
  ]
})
export class SkyFlyoutForRootCompatModule {}
