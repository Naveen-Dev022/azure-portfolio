import { Injectable } from '@angular/core';
import { Project } from '../../models/project';

@Injectable({ providedIn: 'root' })
export class ProjectService {
  private readonly storageBaseUrl =
    'https://devfolio.blob.core.windows.net/assets/Images/';

  getProjects(): Project[] {
    return [
      {
        title: 'EMF',
        description: 'Hosted on Premises (CompanyProject)',
        imageUrl: this.storageBaseUrl + 'emf.jpeg',
        githubUrl: '',
      },
      {
        title: 'Azure Portfolio',
        description: 'Hosted on Azure Static Web Apps',
        imageUrl: this.storageBaseUrl + 'portfolio.jpeg',
        githubUrl: 'https://github.com/Naveen-Dev022/azure-portfolio',
      },
      {
        title: 'AI Interview App',
        description: 'Angular + Azure Functions',
        imageUrl: this.storageBaseUrl + 'ai interview.jpeg',
        githubUrl: 'https://github.com/yourrepo2',
      },
    ];
  }
}
