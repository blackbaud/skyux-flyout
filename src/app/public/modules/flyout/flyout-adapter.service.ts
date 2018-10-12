import {
  ElementRef,
  Injectable,
  Renderer2,
  RendererFactory2,
  ComponentRef
} from '@angular/core';

import {
  SkyWindowRefService
} from '@skyux/core';

import {
  SkyFlyoutComponent
} from './flyout.component';

@Injectable()
export class SkyFlyoutAdapterService {
  private renderer: Renderer2;
  private otherHostElementTags = ['sky-modal-host', 'sky-toast', 'sky-modal'];

  constructor(
    private rendererFactory: RendererFactory2,
    private windowRef: SkyWindowRefService
  ) {
    this.renderer = this.rendererFactory.createRenderer(undefined, undefined);
  }

  public appendToBody(element: any): void {
    const body = this.windowRef.getWindow().document.body;
    this.renderer.appendChild(body, element);
  }

  public removeHostElement(): void {
    const document = this.windowRef.getWindow().document;
    const hostElement = document.querySelector('sky-flyout');
    this.renderer.removeChild(document.body, hostElement);
  }

  public adjustHeaderForHelp(header: ElementRef): void {
    const windowObj = this.windowRef.getWindow();
    const helpWidget = windowObj.document.getElementById('bb-help-invoker');

    if (helpWidget) {
      this.renderer.addClass(header.nativeElement, 'sky-flyout-help-shim');
    }
  }

  public toggleIframePointerEvents(enable: boolean): void {
    // When iframes are present on the page, they may interfere with dragging
    // temporarily disable pointer events in iframes when dragging starts.
    // When re-enabling we set to the empty string as it will remove the element styling
    // and fall back to any css originally given to iframe
    const iframes = document.querySelectorAll('iframe');
    for (let i = 0; i < iframes.length; i++) {
      iframes[i].style.pointerEvents = enable ? '' : 'none';
    }
  }

  public shouldClickCloseFlyout(host: ComponentRef<SkyFlyoutComponent>, target: Node): boolean {
    if (host && host.location && !host.location.nativeElement.contains(target)) {

      for (let otherHostTag of this.otherHostElementTags) {
        let el = (<Element>target);
        do {
          if (el.tagName.toLowerCase() === otherHostTag) {
            return false;
          }
          el = el.parentElement;
        // tslint:disable-next-line:no-null-keyword
        } while (el !== null && el.nodeType === 1);
      }
      return true;
    }

    return false;
  }
}
