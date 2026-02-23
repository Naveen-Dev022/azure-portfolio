import { Component } from '@angular/core';
import { AppInsightsService } from '../../core/app-insights.service';
import { environment } from '../../../environments/environment';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  constructor(
    private ai: AppInsightsService,
    private http: HttpClient,
  ) {}

  downloadResume(): void {
    const fileUrl = environment.resumeLink;
    const link = document.createElement('a');
    link.href = fileUrl; // your full Azure blob URL
    link.download = 'Naveen_Resume.pdf';
    link.target = '_blank'; // optional
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    this.ai.logEvent('Resume Downloaded');
  }
}
