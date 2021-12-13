import {
  element,
  browser,
  by
} from 'protractor';

import {
  expect,
  SkyHostBrowser,
  SkyVisualThemeSelector
} from '@skyux-sdk/e2e';

import {
  SkyHostBrowserBreakpoint
} from '@skyux-sdk/e2e/host-browser/host-browser-breakpoint';

import {
  ThemePlatformHelper
} from './utils/theme-platform-utils';

describe('Flyout', () => {

  //#region helpers
  let currentTheme: string;
  let currentThemeMode: string;

  async function selectTheme(theme: string, mode: string): Promise<void> {
    currentTheme = theme;
    currentThemeMode = mode;

    return SkyVisualThemeSelector.selectTheme(theme, mode);
  }

  function getScreenshotName(name: string): string {
    if (currentTheme) {
      name += '-' + currentTheme;
    }

    if (currentThemeMode) {
      name += '-' + currentThemeMode;
    }

    return name;
  }

  function openDropdown(): void {
    element(by.css('.sky-flyout .sky-dropdown-button')).click();
    SkyHostBrowser.moveCursorOffScreen();
  }

  function validateFlyout(size: SkyHostBrowserBreakpoint, done: DoneFn): void {
    SkyHostBrowser.setWindowBreakpoint(size);
    element(by.css('.sky-btn-primary')).click();
    expect('body').toMatchBaselineScreenshot(done, {
      screenshotName: getScreenshotName(`flyout-${size}`)
    });
  }

  function validateDropdownInFlyout(size: SkyHostBrowserBreakpoint, done: DoneFn): void {
    SkyHostBrowser.setWindowBreakpoint(size);
    element(by.css('.sky-btn-primary')).click();
    browser.sleep(250);
    openDropdown();
    expect('body').toMatchBaselineScreenshot(done, {
      screenshotName: getScreenshotName(`flyout-absolute-${size}`)
    });
  }

  function validateIteratorButtons(size: SkyHostBrowserBreakpoint, done: DoneFn): void {
    SkyHostBrowser.setWindowBreakpoint(size);
    element(by.css('#open-flyout-with-iterators')).click();
    expect('body').toMatchBaselineScreenshot(done, {
      screenshotName: getScreenshotName(`flyout-iterators-${size}`)
    });
  }

  function validateDisabledIteratorButtons(size: SkyHostBrowserBreakpoint, done: DoneFn): void {
    SkyHostBrowser.setWindowBreakpoint(size);
    element(by.css('#open-flyout-with-iterators-disabled')).click();
    expect('body').toMatchBaselineScreenshot(done, {
      screenshotName: getScreenshotName(`flyout-no-iterators-${size}`)
    });
  }

  function validateFullScreen(size: SkyHostBrowserBreakpoint, done: DoneFn): void {
    SkyHostBrowser.setWindowBreakpoint(size);
    element(by.css('#open-flyout-fullscreen')).click();
    expect('body').toMatchBaselineScreenshot(done, {
      screenshotName: getScreenshotName(`flyout-fullscreen-${size}`)
    });
  }

  function validateResponsiveContainer(size: SkyHostBrowserBreakpoint, done: DoneFn): void {
    // Since we're testing the responsive container inside the flyout,
    // the browser should always run with a large breakpoint.
    SkyHostBrowser.setWindowBreakpoint('lg');
    element(by.css(`#open-responsive-flyout-${size}`)).click();
    expect('body').toMatchBaselineScreenshot(done, {
      screenshotName: getScreenshotName(`flyout-responsive-${size}`)
    });
  }

  function closeFlyout(): void {
    element(by.css('.sky-flyout-btn-close')).click();
  }

  function runTests(): void {
    it('should match previous screenshot', (done) => {
      validateFlyout('lg', done);
    });

    it('should match previous screenshot (screen: xs)', (done) => {
      validateFlyout('xs', done);
    });

    it('should handle absolutely positioned items inside the flyout', (done) => {
      validateDropdownInFlyout('lg', done);
    });

    it('should handle absolutely positioned items inside the flyout (screen: xs)', (done) => {
      validateDropdownInFlyout('xs', done);
    });

    it('should match previous screenshot when row iterators are enabled', (done) => {
      validateIteratorButtons('lg', done);
    });

    it('should match previous screenshot when row iterators are enabled (screen: xs)', (done) => {
      validateIteratorButtons('xs', done);
    });

    it('should match previous screenshot when row iterators are disabled', (done) => {
      validateDisabledIteratorButtons('lg', done);
    });

    it('should match previous screenshot when row iterator are disabled (screen: xs)', (done) => {
      validateDisabledIteratorButtons('xs', done);
    });

    it('should match previous screenshot when flyout is fullscreen (screen: xs)', (done) => {
      validateFullScreen('xs', done);
    });

    it('should match previous screenshot when the flyout contains responsive content (flyout: xs)',
      (done) => {
        validateResponsiveContainer('xs', done);
      });

    it('should match previous screenshot when the flyout contains responsive content (flyout: sm)',
      (done) => {
        validateResponsiveContainer('sm', done);
      });

    it('should match previous screenshot when the flyout contains responsive content (flyout: md)',
      (done) => {
        validateResponsiveContainer('md', done);
      });

    it('should match previous screenshot when the flyout contains responsive content (flyout: lg)',
      (done) => {
      validateResponsiveContainer('lg', done);
    });
  }
  //#endregion

  beforeEach(async () => {
    currentTheme = undefined;
    currentThemeMode = undefined;

    await SkyHostBrowser.get('visual/flyout');
  });

  afterEach(() => {
    closeFlyout();
  });

  runTests();

  it('should match previous screenshot when the flyout contains responsive content (screen: xs)',
  (done) => {
    if (ThemePlatformHelper.shouldSkipVisualTests()) {
      return done();
    }

    SkyHostBrowser.setWindowBreakpoint('xs');
    element(by.css('#open-responsive-flyout-lg')).click();
    expect('body').toMatchBaselineScreenshot(done, {
      screenshotName: 'flyout-responsive-lg-screen-xs'
    });
  });

  describe('when modern theme', () => {
    beforeEach(async () => {
      await selectTheme('modern', 'light');
    });

    runTests();
  });

  describe('when modern theme in dark mode', () => {
    beforeEach(async () => {
      await selectTheme('modern', 'dark');
    });

    runTests();
  });
});
