import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlyoutVisualComponent } from './flyout/flyout-visual.component';
import { FlyoutResponsiveDemoContentComponent } from './flyout/flyout-responsive-demo-content.component';
import { VisualComponent } from './visual.component';
import { SkyDropdownModule } from '@skyux/popovers'
import { SkyDocsToolsModule } from '@skyux/docs-tools';
import { FlyoutResponsiveDemoComponent } from './flyout/flyout-responsive-demo.component';
import { SkyModalModule } from '@skyux/modals';
import { FlyoutModalDemoComponent } from './flyout/flyout-modal.component';
import { SkyInfiniteScrollModule } from '@skyux/lists';
import { FlyoutDemoComponent } from './flyout/flyout-demo.component';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    FlyoutDemoComponent,
    FlyoutModalDemoComponent,
    FlyoutResponsiveDemoContentComponent,
    FlyoutResponsiveDemoComponent,
    FlyoutVisualComponent,
    VisualComponent
  ],
  imports: [
    BrowserAnimationsModule,
    CommonModule,
    RouterModule,
    SkyDocsToolsModule,
    SkyDropdownModule,
    SkyInfiniteScrollModule,
    SkyModalModule
  ]
})
export class VisualModule { }
