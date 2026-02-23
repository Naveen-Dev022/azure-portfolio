import { Injectable } from '@angular/core';
import { ApplicationInsights } from '@microsoft/applicationinsights-web';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AppInsightsService {
  private appInsights: ApplicationInsights;

  constructor() {
    this.appInsights = new ApplicationInsights({
      config: {
        connectionString: environment.appInsightsKey,
        enableAutoRouteTracking: true,
      },
    });

    this.appInsights.loadAppInsights();
  }

  logPageView(name?: string) {
    this.appInsights.trackPageView({ name });
  }

  logEvent(name: string, properties?: any) {
    this.appInsights.trackEvent({ name }, properties);
  }

  logException(error: Error) {
    this.appInsights.trackException({ exception: error });
  }
}
