import {
  inject,
  TestBed
} from '@angular/core/testing';

import {
  Subscription
} from 'rxjs/Subscription';

import {
  SkyMediaBreakpoints,
  SkyWindowRefService
} from '@skyux/core';

import {
  SkyFlyoutAdapterService
} from './flyout-adapter.service';

import {
  SkyFlyoutMediaQueryService
} from './flyout-media-query.service';

describe('Flyout media query service', () => {

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        SkyFlyoutAdapterService,
        SkyFlyoutMediaQueryService,
        SkyWindowRefService
      ]
    });
  });

  beforeEach(inject([SkyFlyoutAdapterService], (adapterService: SkyFlyoutAdapterService) => {
    spyOn(adapterService, 'setFlexClass').and.stub();
  }));

  describe('initialization test', () => {

    it('should handle initialization properly', inject(
      [SkyFlyoutMediaQueryService],
      (mediaQueryService: SkyFlyoutMediaQueryService) => {
        let result: SkyMediaBreakpoints;
        let subscription: Subscription;

        subscription = mediaQueryService.subscribe(
          (args: SkyMediaBreakpoints) => {
            result = args;
          }
        );

        expect(result).toEqual(SkyMediaBreakpoints.xs);

        subscription.unsubscribe();
        mediaQueryService.destroy();
      }
    ));
  });

  describe('query tests', () => {

    it('should complete the subscription on destroy', inject(
      [SkyFlyoutMediaQueryService],
      (mediaQueryService: SkyFlyoutMediaQueryService) => {
        let subscription: Subscription;

        subscription = mediaQueryService.subscribe(
          (args: SkyMediaBreakpoints) => {

          }
        );

        mediaQueryService.destroy();

        expect(subscription.closed).toBe(true);
      }
    ));

    it('should update the breakpoint correctly when setBreakPoint is called', inject(
      [SkyFlyoutMediaQueryService],
      (mediaQueryService: SkyFlyoutMediaQueryService) => {
        let subscription: Subscription;
        let result: SkyMediaBreakpoints;

        subscription = mediaQueryService.subscribe(
          (args: SkyMediaBreakpoints) => {
            result = args;
          }
        );

        mediaQueryService.setBreakPoint(300);

        expect(result).toEqual(SkyMediaBreakpoints.xs);

        mediaQueryService.setBreakPoint(900);

        expect(result).toEqual(SkyMediaBreakpoints.sm);

        mediaQueryService.setBreakPoint(1100);

        expect(result).toEqual(SkyMediaBreakpoints.md);

        mediaQueryService.setBreakPoint(1400);

        expect(result).toEqual(SkyMediaBreakpoints.lg);

        subscription.unsubscribe();
        mediaQueryService.destroy();
      }
    ));

    it('should call the adapter to update the responsive class when setBreakPoint is called',
      inject(
        [SkyFlyoutMediaQueryService, SkyFlyoutAdapterService],
        (mediaQueryService: SkyFlyoutMediaQueryService, adapterService: SkyFlyoutAdapterService) => {

          spyOn(adapterService, 'setFlexClass');

          mediaQueryService.setBreakPoint(300);

          expect(adapterService.setFlexClass).toHaveBeenCalledWith(SkyMediaBreakpoints.xs);

          mediaQueryService.setBreakPoint(900);

          expect(adapterService.setFlexClass).toHaveBeenCalledWith(SkyMediaBreakpoints.sm);

          mediaQueryService.setBreakPoint(1100);

          expect(adapterService.setFlexClass).toHaveBeenCalledWith(SkyMediaBreakpoints.md);

          mediaQueryService.setBreakPoint(1400);

          expect(adapterService.setFlexClass).toHaveBeenCalledWith(SkyMediaBreakpoints.lg);

          mediaQueryService.destroy();
        }
      ));

    it('should provide the ability to check the current breakpoints', inject(
      [SkyFlyoutMediaQueryService],
      (mediaQueryService: SkyFlyoutMediaQueryService) => {
        mediaQueryService.setBreakPoint(900);

        expect(mediaQueryService.current).toEqual(SkyMediaBreakpoints.sm);
        mediaQueryService.destroy();
      }
    ));
  });
});
