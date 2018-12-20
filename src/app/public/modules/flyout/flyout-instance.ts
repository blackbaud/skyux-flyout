import {
  EventEmitter,
  OnDestroy
} from '@angular/core';

import {
  Subject
} from 'rxjs/Subject';

import {
  SkyFlyoutMessage,
  SkyFlyoutMessageType
} from './types';

export class SkyFlyoutInstance<T> implements OnDestroy {
  public closed = new EventEmitter<void>();
  public componentInstance: T;
  public isOpen = true;

  public iteratorPreviousButtonClick = new EventEmitter<void>();

  public iteratorNextButtonClick = new EventEmitter<void>();

  public set iteratorNextButtonDisabled(newValue: boolean) {
    this._iteratorNextButtonDisabled = newValue;
    if (newValue) {
      this.hostController.next({
        type: SkyFlyoutMessageType.IteratorNextButtonDisabled
      });
    } else {
      this.hostController.next({
        type: SkyFlyoutMessageType.IteratorNextButtonEnabled
      });
    }
  }

  public get iteratorNextButtonDisabled(): boolean {
    return this._iteratorNextButtonDisabled;
  }

  public set iteratorPreviousButtonDisabled(newValue: boolean) {
    this._iteratorPreviousButtonDisabled = newValue;
    if (newValue) {
      this.hostController.next({
        type: SkyFlyoutMessageType.IteratorPreviousButtonDisabled
      });
    } else {
      this.hostController.next({
        type: SkyFlyoutMessageType.IteratorPreviousButtonEnabled
      });
    }
  }

  public get iteratorPreviousButtonDisabled(): boolean {
    return this._iteratorPreviousButtonDisabled;
  }

  private _iteratorNextButtonDisabled = false;

  private _iteratorPreviousButtonDisabled = false;

  // Used to communicate with the host component.
  public get hostController(): Subject<SkyFlyoutMessage> {
    return this._hostController;
  }

  private _hostController = new Subject<SkyFlyoutMessage>();

  constructor() {
    this.closed.subscribe(() => {
      this.isOpen = false;
    });
  }

  public ngOnDestroy() {
    this.iteratorPreviousButtonClick.complete();
    this.iteratorNextButtonClick.complete();
  }

  public close() {
    this.hostController.next({
      type: SkyFlyoutMessageType.Close
    });

    this.hostController.complete();
  }
}
