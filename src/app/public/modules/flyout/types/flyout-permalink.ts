import {
  NavigationExtras
} from '@angular/router';

export interface SkyFlyoutPermalink {

  /**
   * Specifies a text label for the permalink button.
   */
  label?: string;

  /**
   * Specifies an object that represents the Angular application route.
   * The object includes two properties that are mapped to
   * Angular's [`Router.navigate(commands, extras?)`](https://angular.io/api/router/Router#navigate) method.
   */
  route?: {
    commands: any[],
    extras?: NavigationExtras;
  };

  /**
   * Specifies an external URL for the permalink.
   */
  url?: string;
}
