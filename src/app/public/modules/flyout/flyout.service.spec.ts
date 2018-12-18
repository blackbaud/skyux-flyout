import {
  ApplicationRef
} from '@angular/core';

import {
  inject,
  TestBed
} from '@angular/core/testing';

import {
  NoopAnimationsModule
} from '@angular/platform-browser/animations';

import {
  expect
} from '@skyux-sdk/testing';

import {
  SkyWindowRefService
} from '@skyux/core';

import {
  SkyFlyoutAdapterService
} from './flyout-adapter.service';

import {
  SkyFlyoutFixturesModule
} from './fixtures/flyout-fixtures.module';

import {
  SkyFlyoutHostsTestComponent
} from './fixtures/flyout-hosts.component.fixture';

import {
  SkyFlyoutService
} from './flyout.service';

import {
  SkyFlyoutMessageType
} from './types';

describe('Flyout service', () => {
  let service: SkyFlyoutService;
  let applicationRef: ApplicationRef;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        NoopAnimationsModule,
        SkyFlyoutFixturesModule
      ],
      providers: [
        SkyFlyoutAdapterService,
        SkyWindowRefService
      ]
    });

    service = TestBed.get(SkyFlyoutService);
  });

  beforeEach(
    inject(
      [
        ApplicationRef
      ],
      (
        _applicationRef: ApplicationRef
      ) => {
        applicationRef = _applicationRef;
      }
    )
  );

  it('should only create a single host component', () => {
      const spy = spyOn(service as any, 'createHostComponent').and.callThrough();
      service.open(SkyFlyoutHostsTestComponent);
      service.open(SkyFlyoutHostsTestComponent);
      expect(spy.calls.count()).toEqual(1);
    }
  );

  it('should return an instance with a close method', () => {
      const flyout = service.open(SkyFlyoutHostsTestComponent);
      expect(typeof flyout.close).toEqual('function');
    }
  );

  it('should expose a method to remove the flyout from the DOM', () => {
      spyOn(window, 'setTimeout').and.callFake((fun: Function) => {
        fun();
      });
      service.open(SkyFlyoutHostsTestComponent);
      applicationRef.tick();
      const spy = spyOn(service['host'].instance.messageStream, 'next').and.callThrough();
      service.close();
      applicationRef.tick();
      expect(spy).toHaveBeenCalledWith({
        type: SkyFlyoutMessageType.Close
      });
    }
  );
});
