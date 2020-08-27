import {
  SkyFlyoutAction
} from './flyout-action';

import {
  SkyFlyoutPermalink
} from './flyout-permalink';

/**
 * Specifies the configuration options to set up a flyout.
 */
export interface SkyFlyoutConfig {

  /**
   * Sets the flyout's `aria-describedby` attribute to support accessibility.
   * The value should be the HTML element ID (without the leading `#`) of the element
   * that describes the flyout. Typically, the description includes text on the flyout
   * but not on items that users interact with such as buttons and forms.
   */
  ariaDescribedBy?: string;

  /**
   * Sets the flyout's `aria-labelledby` attribute to support accessibility.The value
   * should be the HTML element ID (without the leading `#`) of the element that labels the flyout.
   */
  ariaLabelledBy?: string;

  /**
   * Specifies an ARIA role for the flyout to support accessibility by indicating how
   * the flyout functions and what it controls. The ARIA role indicates what
   * the flyout represents on the web page. For information about ARIA roles,
   * see the [WAI-ARIA roles model](https://www.w3.org/WAI/PF/aria/roles).
   */
  ariaRole?: string;

  /**
   * Specifies the default width of the flyout container. If you do not provide a width,
   * the flyout defaults to half the width of its container.
   */
  defaultWidth?: number;

  /**
   * Specifies the minimum resize width of the flyout container.
   * Defaults to `320`.
   */
  minWidth?: number;

  /**
   * Specifies the maximum resize width of the flyout container.
   * Defaults to the `defaultWidth` value if no value is given.
   */
  maxWidth?: number;

  /**
   * Displays a permalink button in the flyout header that navigates users to the URL
   * (or application route) representative of the flyout's contents.
   */
  permalink?: SkyFlyoutPermalink;

  /**
   * @internal
   */
  primaryAction?: SkyFlyoutAction;

  /**
   * Specifies an array of custom providers to pass to the component's constructor.
   */
  providers?: any[];

  /**
   * Indicates whether to display iterator buttons in the flyout header to allow users
   * to access the next and previous records in a record set.
   * Defaults to `false`.
   */
  showIterator?: boolean;

  /**
   * Disables the previous iterator button in the flyout header that accesses
   * the previous record in a record set. Defaults to `false`.
   */
  iteratorPreviousButtonDisabled?: boolean;

  /**
   * Disables the next iterator button in the flyout header that accesses the next record
   * in a record set. Defaults to `false`.
   */
  iteratorNextButtonDisabled?: boolean;

  /**
   * Specifies a unique key for the UI Config Service to retrieve stored settings from a database.
   * The UI Config Service saves configuration settings for users to preserve the width of
   * the flyout. For more information about the UI Config Service,
   * see [the sticky settings documentation](https://developer.blackbaud.com/skyux/learn/get-started/advanced/sticky-settings).
   */
  settingsKey?: string;
}
