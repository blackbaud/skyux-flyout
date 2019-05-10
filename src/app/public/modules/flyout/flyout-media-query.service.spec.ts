import {
  inject,
  TestBed
} from '@angular/core/testing';

import {
  Subscription
} from 'rxjs/Subscription';

import {
  SkyMediaBreakpoints
} from '@skyux/core';

import {
  SkyFlyoutMediaQueryService
} from './flyout-media-query.service';

describe('Flyout media query service', () => {

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        SkyFlyoutMediaQueryService
      ]
    });
  });

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

        mediaQueryService.setBreakpointForWidth(300);

        expect(result).toEqual(SkyMediaBreakpoints.xs);

        mediaQueryService.setBreakpointForWidth(900);

        expect(result).toEqual(SkyMediaBreakpoints.sm);

        mediaQueryService.setBreakpointForWidth(1100);

        expect(result).toEqual(SkyMediaBreakpoints.md);

        mediaQueryService.setBreakpointForWidth(1400);

        expect(result).toEqual(SkyMediaBreakpoints.lg);

        subscription.unsubscribe();
        mediaQueryService.destroy();
      }
    ));

    it('should provide the ability to check the current breakpoints', inject(
      [SkyFlyoutMediaQueryService],
      (mediaQueryService: SkyFlyoutMediaQueryService) => {
        mediaQueryService.setBreakpointForWidth(900);

        expect(mediaQueryService.current).toEqual(SkyMediaBreakpoints.sm);
        mediaQueryService.destroy();
      }
    ));
  });

  describe('width checks', () => {
    it('should return true from isWidthXs when appropriate', inject(
      [SkyFlyoutMediaQueryService],
      (mediaQueryService: SkyFlyoutMediaQueryService) => {
        expect(mediaQueryService.isWidthXs(767)).toBeTruthy();

        mediaQueryService.destroy();
      }
    ));

    it('should return false from isWidthXs when appropriate', inject(
      [SkyFlyoutMediaQueryService],
      (mediaQueryService: SkyFlyoutMediaQueryService) => {
        expect(mediaQueryService.isWidthXs(768)).toBeFalsy();

        mediaQueryService.destroy();
      }
    ));

    it('should return true from isWidthSm when appropriate', inject(
      [SkyFlyoutMediaQueryService],
      (mediaQueryService: SkyFlyoutMediaQueryService) => {
        expect(mediaQueryService.isWidthSm(768)).toBeTruthy();
        expect(mediaQueryService.isWidthSm(991)).toBeTruthy();

        mediaQueryService.destroy();
      }
    ));

    it('should return false from isWidthSm when appropriate', inject(
      [SkyFlyoutMediaQueryService],
      (mediaQueryService: SkyFlyoutMediaQueryService) => {
        expect(mediaQueryService.isWidthSm(767)).toBeFalsy();
        expect(mediaQueryService.isWidthSm(992)).toBeFalsy();

        mediaQueryService.destroy();
      }
    ));

    it('should return true from isWidthMd when appropriate', inject(
      [SkyFlyoutMediaQueryService],
      (mediaQueryService: SkyFlyoutMediaQueryService) => {
        expect(mediaQueryService.isWidthMd(992)).toBeTruthy();
        expect(mediaQueryService.isWidthMd(1199)).toBeTruthy();

        mediaQueryService.destroy();
      }
    ));

    it('should return false from isWidthMd when appropriate', inject(
      [SkyFlyoutMediaQueryService],
      (mediaQueryService: SkyFlyoutMediaQueryService) => {
        expect(mediaQueryService.isWidthMd(991)).toBeFalsy();
        expect(mediaQueryService.isWidthMd(1200)).toBeFalsy();

        mediaQueryService.destroy();
      }
    ));

    it('should return true from isWidthLg when appropriate', inject(
      [SkyFlyoutMediaQueryService],
      (mediaQueryService: SkyFlyoutMediaQueryService) => {
        expect(mediaQueryService.isWidthLg(1200)).toBeTruthy();
        expect(mediaQueryService.isWidthLg(2000)).toBeTruthy();

        mediaQueryService.destroy();
      }
    ));

    it('should return false from isWidthLg when appropriate', inject(
      [SkyFlyoutMediaQueryService],
      (mediaQueryService: SkyFlyoutMediaQueryService) => {
        expect(mediaQueryService.isWidthLg(1199)).toBeFalsy();

        mediaQueryService.destroy();
      }
    ));
  });
});
