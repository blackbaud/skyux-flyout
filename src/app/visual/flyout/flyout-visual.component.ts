import {
  Component
} from '@angular/core';

import {
  SkyFlyoutService, SkyFlyoutInstance
} from '../../public';

import {
  FlyoutDemoComponent
} from './flyout-demo.component';

import {
  FlyoutDemoContext
} from './flyout-demo-context';

@Component({
  selector: 'flyout-visual',
  templateUrl: './flyout-visual.component.html',
  styleUrls: ['./flyout-visual.component.scss']
})
export class FlyoutVisualComponent {
  public users: {id: string, name: string}[] = [
    { id: '1', name: 'Sally' },
    { id: '2', name: 'John' },
    { id: '3', name: 'David' },
    { id: '4', name: 'Janet' }
  ];

  public flyout: SkyFlyoutInstance<any>;

  constructor(
    private flyoutService: SkyFlyoutService
  ) { }

  public openFlyout(record: any) {
    this.flyoutService.open(FlyoutDemoComponent, {
      providers: [{
        provide: FlyoutDemoContext,
        useValue: record
      }]
    });
  }

  public openFlyoutWithRowIterators(record: any, previousIsDisabled: boolean, nextIsDisabled: boolean) {
    this.flyout = this.flyoutService.open(FlyoutDemoComponent, {
      providers: [{
        provide: FlyoutDemoContext,
        useValue: record
      }],
      rowIterator: {
        previousIsDisabled: previousIsDisabled,
        nextIsDisabled: nextIsDisabled
      }
    });

    this.flyout.onRowIteratorPreviousClick.subscribe(() => {
      console.log('previous clicked');
    });

    this.flyout.onRowIteratorNextClick.subscribe(() => {
      console.log('next clicked');
    });
  }
}
