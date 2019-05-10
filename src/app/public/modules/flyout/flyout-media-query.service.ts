import {
  Injectable
} from '@angular/core';

import {
  BehaviorSubject
} from 'rxjs/BehaviorSubject';

import {
  Subscription
} from 'rxjs/Subscription';

import {
  SkyMediaBreakpoints,
  SkyMediaQueryListener
} from '@skyux/core';

@Injectable()
export class SkyFlyoutMediaQueryService {

  public get current(): SkyMediaBreakpoints {
    return this._current;
  }

  private currentSubject = new BehaviorSubject<SkyMediaBreakpoints>(this.current);

  private _current = SkyMediaBreakpoints.xs;

  constructor() {
    this.currentSubject.next(this._current);
  }

  public subscribe(listener: SkyMediaQueryListener): Subscription {
    return this.currentSubject.subscribe({
      next: (breakpoints: SkyMediaBreakpoints) => {
        listener(breakpoints);
      }
    });
  }

  public setBreakpointForWidth(width: number): void {
    let breakpoint: SkyMediaBreakpoints;

    if (this.isWidthXs(width)) {
      breakpoint = SkyMediaBreakpoints.xs;
    } else if (this.isWidthSm(width)) {
      breakpoint = SkyMediaBreakpoints.sm;
    } else if (this.isWidthMd(width)) {
      breakpoint = SkyMediaBreakpoints.md;
    } else {
      breakpoint = SkyMediaBreakpoints.lg;
    }

    this._current = breakpoint;
    this.currentSubject.next(this._current);
  }

  public isWidthXs(width: number): boolean {
    const xsBreakpointMaxPixels = 767;

    if (width <= xsBreakpointMaxPixels) {
      return true;
    } else {
      return false;
    }
  }

  public isWidthSm(width: number): boolean {
    const smBreakpointMinPixels = 768;
    const smBreakpointMaxPixels = 991;

    if (width >= smBreakpointMinPixels && width <= smBreakpointMaxPixels) {
      return true;
    } else {
      return false;
    }
  }

  public isWidthMd(width: number): boolean {
    const mdBreakpointMinPixels = 992;
    const mdBreakpointMaxPixels = 1199;

    if (width >= mdBreakpointMinPixels && width <= mdBreakpointMaxPixels) {
      return true;
    } else {
      return false;
    }
  }

  public isWidthLg(width: number): boolean {
    const lgBreakpointMinPixels = 1200;

    if (width >= lgBreakpointMinPixels) {
      return true;
    } else {
      return false;
    }
  }

  public destroy(): void {
    this.currentSubject.complete();
  }
}
