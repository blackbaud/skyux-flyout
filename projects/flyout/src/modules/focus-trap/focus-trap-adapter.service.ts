import { Injectable, ElementRef } from '@angular/core';

/**
 * @internal
 */
@Injectable()
export class SkyFocusTrapAdapterService {
  public isFocusInFirstItem(
    event: KeyboardEvent,
    list: Array<HTMLElement>
  ): boolean {
    /* istanbul ignore next */
    /* sanity check */
    let eventTarget = event.target || event.srcElement;
    return list.length > 0 && eventTarget === list[0];
  }

  public isFocusInLastItem(
    event: KeyboardEvent,
    list: Array<HTMLElement>
  ): boolean {
    /* istanbul ignore next */
    /* sanity check */
    let eventTarget = event.target || event.srcElement;
    return list.length > 0 && eventTarget === list[list.length - 1];
  }

  public isElementFocused(event: KeyboardEvent, element: ElementRef): boolean {
    /* istanbul ignore next */
    /* sanity check */
    let eventTarget = event.target || event.srcElement;
    return eventTarget === element.nativeElement;
  }

  focusElementByIndex(list: HTMLElement[], index: number): boolean {
    if (list.length > 0 && index < list.length) {
      list[index].focus();
      return true;
    }
    return false;
  }
}
