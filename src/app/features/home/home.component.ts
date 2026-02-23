import { Component } from '@angular/core';
import { AppInsightsService } from '../../core/app-insights.service';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
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

    this.http.get(fileUrl, { responseType: 'blob' }).subscribe((blob) => {
      const downloadLink = document.createElement('a');
      const objectUrl = URL.createObjectURL(blob);

      downloadLink.href = objectUrl;
      downloadLink.download = 'Naveen_Resume.pdf';
      downloadLink.click();

      URL.revokeObjectURL(objectUrl);
      this.ai.logEvent('Resume Downloaded');
    });
  }
}
