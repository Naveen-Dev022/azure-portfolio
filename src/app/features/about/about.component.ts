import { Component } from '@angular/core';
import { AppInsightsService } from '../../core/app-insights.service';

@Component({
  selector: 'app-about',
  imports: [],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css',
})
export class AboutComponent {
  constructor(private appInsights: AppInsightsService) {}
  ngOnInit(): void {
    this.appInsights.logPageView('About Page');
  }
}
