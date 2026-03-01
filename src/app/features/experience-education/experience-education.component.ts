import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-experience',
  imports: [CommonModule],
  templateUrl: './experience-education.component.html',
  styleUrl: './experience-education.component.css',
})
export class ExperienceEducationComponent {
  experienceYears: number = 0;
  private targetYears: number = 0;

  ngAfterViewInit() {
    this.calculateExperience();
    this.observeSection();
  }

  calculateExperience() {
    const startDate = new Date(2021, 4); // Dec 2019
    const now = new Date();
    const diffYears =
      (now.getTime() - startDate.getTime()) / (1000 * 60 * 60 * 24 * 365);
    this.targetYears = Math.floor(diffYears);
  }

  startCounter() {
    let current = 0;
    const interval = setInterval(() => {
      if (current < this.targetYears) {
        current++;
        this.experienceYears = current;
      } else {
        clearInterval(interval);
      }
    }, 300);
  }

  observeSection() {
    const section = document.querySelector('.premium-timeline');
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        this.startCounter();
        observer.disconnect();
      }
    });
    if (section) observer.observe(section);
  }

  timeline = [
    {
      type: 'experience',
      icon: '💼',
      title: 'Senior Software Engineer',
      company: 'HCLTech, Chennai',
      duration: 'Jan 2025 – Present',
    },
    {
      type: 'experience',
      icon: '💼',
      title: 'Software Engineer',
      company: 'HCLTech, Chennai',
      duration: 'Jan 2022 – Dec 2024',
    },
    {
      type: 'experience',
      icon: '💼',
      title: 'Support Engineer (Including Internship)',
      company: 'Kovai Systems India Private Limited, Chennai',
      duration: 'Dec 2019 – Jan 2022',
    },
    {
      type: 'education',
      icon: '🎓',
      title: 'Bachelor of Engineering',
      company: 'Your University Name',
      duration: 'Year – Year',
    },
  ];
}
