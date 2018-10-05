import {
  element,
  browser,
  by
} from 'protractor';

import {
  expect,
  SkyHostBrowser
} from '@skyux-sdk/e2e';

describe('Flyout', () => {
  it('should match previous screenshot', (done) => {
    SkyHostBrowser.get('visual/flyout');
    SkyHostBrowser.setWindowBreakpoint('lg');
    element(by.css('.sky-btn-primary')).click();
    expect('body').toMatchBaselineScreenshot(done);
    // element(by.css('.sky-flyout .sky-flyout-btn-close')).click();
  });

  it('should match previous screenshot (screen: xs)', (done) => {
    SkyHostBrowser.get('visual/flyout');
    SkyHostBrowser.setWindowBreakpoint('xs');
    element(by.css('.sky-btn-primary')).click();
    expect('body').toMatchBaselineScreenshot(done);
    // element(by.css('.sky-flyout .sky-flyout-btn-close')).click();
  });

  it('should handle absolutely positioned items inside the flyout', (done) => {
    SkyHostBrowser.get('visual/flyout');
    SkyHostBrowser.setWindowBreakpoint('lg');
    element(by.css('.sky-btn-primary')).click();
    browser.sleep(250);
    element(by.css('.sky-flyout .sky-dropdown-button')).click();
    SkyHostBrowser.moveCursorOffScreen();
    expect('body').toMatchBaselineScreenshot(done);
    // element(by.css('.sky-flyout .sky-flyout-btn-close')).click();
  });

  it('should handle absolutely positioned items inside the flyout (screen: xs)', (done) => {
    SkyHostBrowser.get('visual/flyout');
    SkyHostBrowser.setWindowBreakpoint('xs');
    element(by.css('.sky-btn-primary')).click();
    browser.sleep(250);
    element(by.css('.sky-flyout .sky-dropdown-button')).click();
    SkyHostBrowser.moveCursorOffScreen();
    expect('body').toMatchBaselineScreenshot(done);
    // element(by.css('.sky-flyout .sky-flyout-btn-close')).click();
  });
});
