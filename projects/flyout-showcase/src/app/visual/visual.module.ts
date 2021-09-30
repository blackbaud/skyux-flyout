import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlyoutVisualComponent } from './flyout/flyout-visual.component';
import { FlyoutResponsiveDemoContentComponent } from './flyout/flyout-responsive-demo-content.component';
import { VisualComponent } from './visual.component';
import { SkyDropdownModule } from '@skyux/popovers'
import { FlyoutResponsiveDemoComponent } from './flyout/flyout-responsive-demo.component';
import { SkyModalModule } from '@skyux/modals';
import { FlyoutModalDemoComponent } from './flyout/flyout-modal.component';
import { SkyInfiniteScrollModule } from '@skyux/lists';
import { FlyoutDemoComponent } from './flyout/flyout-demo.component';
import { RouterModule } from '@angular/router';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { SkyE2eThemeSelectorModule } from '@skyux/e2e-client';

@NgModule({
  declarations: [
    FlyoutDemoComponent,
    FlyoutModalDemoComponent,
    FlyoutResponsiveDemoContentComponent,
    FlyoutResponsiveDemoComponent,
    FlyoutVisualComponent,
    VisualComponent
  ],
  //  Using NoopAnimationsModule for e2e tests.
  //  Replace this with BrowserAnimationsModule to see animations.
  imports: [
    CommonModule,
    NoopAnimationsModule,
    RouterModule,
    SkyDropdownModule,
    SkyInfiniteScrollModule,
    SkyModalModule,
    SkyE2eThemeSelectorModule
  ]
})
export class VisualModule { }
