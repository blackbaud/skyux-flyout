import {
  Component,
  OnDestroy
} from '@angular/core';

import {
  SkyThemeService,
  SkyThemeSettings
} from '@skyux/theme';

import {
  Subject
} from 'rxjs';

import {
  takeUntil
} from 'rxjs/operators';

import {
  SkyFlyoutInstance,
  SkyFlyoutService
} from '../../public/public_api';

import {
  FlyoutDemoComponent
} from './flyout-demo.component';

import {
  FlyoutResponsiveDemoComponent
} from './flyout-responsive-demo.component';

import {
  FlyoutDemoContext
} from './flyout-demo-context';

@Component({
  selector: 'flyout-visual',
  templateUrl: './flyout-visual.component.html',
  styleUrls: ['./flyout-visual.component.scss']
})
export class FlyoutVisualComponent implements OnDestroy {
  public users: {id: string, name: string}[] = [
    { id: '1', name: 'Sally' },
    { id: '2', name: 'John' },
    { id: '3', name: 'David' },
    { id: '4', name: 'Janet' }
  ];

  public flyout: SkyFlyoutInstance<any>;

  public showButtons = true;

  private ngUnsubscribe = new Subject();

  constructor(
    private flyoutService: SkyFlyoutService,
    private themeSvc: SkyThemeService
  ) { }

  public ngOnDestroy(): void {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }

  public openFlyout(record: any): void {
    this.flyout = this.flyoutService.open(FlyoutDemoComponent, {
      providers: [{
        provide: FlyoutDemoContext,
        useValue: record
      }],
      defaultWidth: 500
    });

    this.flyout.closed.subscribe(() => {
      this.showButtons = true;
    });

    this.showButtons = false;
  }

  public openFlyoutWithIterators(record: any, previousButtonDisabled: boolean, nextButtonDisabled: boolean): void {
    this.flyout = this.flyoutService.open(FlyoutDemoComponent, {
      providers: [{
        provide: FlyoutDemoContext,
        useValue: record
      }],
      defaultWidth: 500,
      showIterator: true,
      iteratorPreviousButtonDisabled: previousButtonDisabled,
      iteratorNextButtonDisabled: nextButtonDisabled
    });

    this.flyout.iteratorPreviousButtonClick
      .pipe(takeUntil(this.ngUnsubscribe))
      .subscribe(() => {
        console.log('previous clicked');
      });

    this.flyout.iteratorNextButtonClick
      .pipe(takeUntil(this.ngUnsubscribe))
      .subscribe(() => {
        console.log('next clicked');
      });

    this.flyout.closed.subscribe(() => {
      this.showButtons = true;
    });

    this.showButtons = false;
  }

  public openFlyoutWithFullscreenAvailable(record: any): void {
    this.flyout = this.flyoutService.open(FlyoutDemoComponent, {
      providers: [{
        provide: FlyoutDemoContext,
        useValue: record
      }],
      minWidth: 600,
      defaultWidth: 800
    });

    this.flyout.closed.subscribe(() => {
      this.showButtons = true;
    });

    this.showButtons = false;
  }

  public openResponsiveFlyout(width: number): void {
    this.flyout = this.flyoutService.open(FlyoutResponsiveDemoComponent, {
      defaultWidth: width,
      maxWidth: 5000
    });

    this.flyout.closed.subscribe(() => {
      this.showButtons = true;
    });

    this.showButtons = false;
  }

  public toggleButtons() {
    this.showButtons = !this.showButtons;
  }

  public themeSettingsChange(themeSettings: SkyThemeSettings): void {
    this.themeSvc.setTheme(themeSettings);
  }
}
