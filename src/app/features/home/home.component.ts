import { Component } from '@angular/core';
import { AppInsightsService } from '../../core/app-insights.service';
import { environment } from '../../../environments/environment';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  constructor(
    private appInsights: AppInsightsService,
    private http: HttpClient,
  ) {}

  ngOnInit(): void {
    this.appInsights.logPageView('Home Page');
  }
  downloadResume(): void {
    const fileUrl = environment.resumeLink;
    const link = document.createElement('a');
    link.href = fileUrl; // your full Azure blob URL
    link.download = 'Naveen_Resume.pdf';
    link.target = '_blank'; // optional
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    this.appInsights.logEvent('Resume Downloaded');
  }
}
