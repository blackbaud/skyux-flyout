import {
  SkyFlyoutAction
} from './flyout-action';

import {
  SkyFlyoutPermalink
} from './flyout-permalink';

import {
  SkyFlyoutRowIterator
} from './flyout-row-iterator';

export interface SkyFlyoutConfig {
  ariaDescribedBy?: string;
  ariaLabelledBy?: string;
  ariaRole?: string;
  defaultWidth?: number;
  minWidth?: number;
  maxWidth?: number;
  permalink?: SkyFlyoutPermalink;
  primaryAction?: SkyFlyoutAction;
  providers?: any[];
  rowIterator?: SkyFlyoutRowIterator;
}
