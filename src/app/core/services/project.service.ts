import { Injectable } from '@angular/core';
import { Project } from '../../models/project';

@Injectable({ providedIn: 'root' })
export class ProjectService {
  private storageBaseUrl =
    'https://YOURSTORAGE.blob.core.windows.net/projects/';

  getProjects(): Project[] {
    return [
      {
        title: 'Azure Portfolio',
        description: 'Hosted on Azure Static Web Apps',
        imageUrl: this.storageBaseUrl + 'portfolio.png',
        githubUrl: 'https://github.com/yourrepo',
      },
      {
        title: 'AI Interview App',
        description: 'Angular + Azure Functions',
        imageUrl: this.storageBaseUrl + 'ai-app.png',
        githubUrl: 'https://github.com/yourrepo2',
      },
    ];
  }
}
