import {
  Component,
  OnDestroy,
  EventEmitter,
  Input,
  Output
} from '@angular/core';

import {
  SkyThemeService
} from '@skyux/theme';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

/**
 * @internal
 */
@Component({
  selector: 'sky-flyout-iterator',
  templateUrl: './flyout-iterator.component.html',
  styleUrls: ['./flyout-iterator.component.scss']
})
export class SkyFlyoutIteratorComponent implements OnDestroy {

  @Input()
  public nextButtonDisabled: boolean;

  @Input()
  public previousButtonDisabled: boolean;

  @Output()
  public get previousButtonClick(): EventEmitter<void> {
    return this._previousButtonClick;
  }

  @Output()
  public get nextButtonClick(): EventEmitter<void> {
    return this._nextButtonClick;
  }

  public themeName: string;

  private ngUnsubscribe = new Subject();

  private _nextButtonClick = new EventEmitter<void>();

  private _previousButtonClick = new EventEmitter<void>();

  constructor(
    public themeSvc: SkyThemeService
  ) {
    this.themeSvc.settingsChange.pipe(
        takeUntil(this.ngUnsubscribe)
      ).subscribe(settings => {
        this.themeName = settings.currentSettings?.theme?.name;
    });
  }

  public ngOnDestroy(): void {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
    this._previousButtonClick.complete();
    this._nextButtonClick.complete();
  }

  public onIteratorPreviousClick(): void {
    if (!this.previousButtonDisabled) {
      this._previousButtonClick.emit();
    }
  }

  public onIteratorNextClick(): void {
    if (!this.nextButtonDisabled) {
      this._nextButtonClick.emit();
    }
  }
}
