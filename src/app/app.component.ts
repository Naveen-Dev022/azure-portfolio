import { Component } from '@angular/core';
import { AppInsightsService } from './core/app-insights.service';
import { LayoutComponent } from './shared/layout/layout.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [LayoutComponent],

  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'azure-portfolio';
  constructor(private appInsights: AppInsightsService) {}
}
