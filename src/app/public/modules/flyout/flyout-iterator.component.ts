import {
  Component,
  OnDestroy,
  EventEmitter,
  Input,
  Output
} from '@angular/core';

@Component({
  selector: 'sky-flyout-iterator',
  templateUrl: './flyout-iterator.component.html'
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

  private _previousButtonClick = new EventEmitter<void>();

  @Output()
  public get nextButtonClick(): EventEmitter<void> {
    return this._nextButtonClick;
  }

  private _nextButtonClick = new EventEmitter<void>();

  constructor() {}

  public ngOnDestroy() {
    this._previousButtonClick.complete();
    this._nextButtonClick.complete();
  }

  public onIteratorPreviousClick() {
    if (!this.previousButtonDisabled) {
      this._previousButtonClick.emit();
    }
  }

  public onIteratorNextClick() {
    if (!this.nextButtonDisabled) {
      this._nextButtonClick.emit();
    }
  }
}
