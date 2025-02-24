import { formatDate } from '@angular/common';
import { Component, HostListener, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Activity } from '../Activity';
import { Application } from '../Application';
import { Jobpost } from '../Jobpost';
import { JobseekerServiceService } from '../jobseeker-service.service';
import { EmployerService } from '../employer.service';
import { Jobseeker } from 'src/Jobseeker';
import { Employer } from 'src/Employer';
import { User } from '../User';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css'],
})
export class AdminDashboardComponent implements OnInit {
  constructor(
    private r: Router,
    private js: JobseekerServiceService,
    private es: EmployerService
  ) {}

  jobSeekers: Jobseeker[] = [
    {
      jobseekerId: 1,
      name: 'John Doe',
      email: 'john@example.com',
      phone: 9876543210,
      city: 'New York',
      degree: 'B.Sc. Computer Science',
      experience: 3,
    },
    {
      jobseekerId: 2,
      name: 'Jane Smith',
      email: 'jane@example.com',
      phone: 8765432109,
      city: 'Los Angeles',
      degree: 'MBA Marketing',
      experience: 5,
    },
    {
      jobseekerId: 3,
      name: 'Michael Johnson',
      email: 'michael@example.com',
      phone: 7654321098,
      city: 'Chicago',
      degree: 'B.Tech Mechanical',
      experience: 2,
    },
    {
      jobseekerId: 4,
      name: 'Emily Davis',
      email: 'emily@example.com',
      phone: 6543210987,
      city: 'Houston',
      degree: 'M.Sc. Data Science',
      experience: 4,
    },
    {
      jobseekerId: 5,
      name: 'Robert Brown',
      email: 'robert@example.com',
      phone: 5432109876,
      city: 'San Francisco',
      degree: 'BBA Finance',
      experience: 6,
    },
    {
      jobseekerId: 6,
      name: 'Olivia Wilson',
      email: 'olivia@example.com',
      phone: 4321098765,
      city: 'Seattle',
      degree: 'PhD Artificial Intelligence',
      experience: 8,
    },
  ];

  employers: Employer[] = [
    {
      employerId: 1,
      employerName: 'Alice Johnson',
      companyName: 'Tech Innovators Ltd.',
      email: 'alice@techinnovators.com',
      phone: '9876543210',
      city: 'New York',
    },
    {
      employerId: 2,
      employerName: 'David Smith',
      companyName: 'Smith & Co. Solutions',
      email: 'david@smithco.com',
      phone: '8765432109',
      city: 'Los Angeles',
    },
    {
      employerId: 3,
      employerName: 'James Wilson',
      companyName: 'NextGen Software',
      email: 'james@nextgensoft.com',
      phone: '7654321098',
      city: 'Chicago',
    },
    {
      employerId: 4,
      employerName: 'Emma Brown',
      companyName: 'FinTech Hub',
      email: 'emma@fintechhub.com',
      phone: '6543210987',
      city: 'Houston',
    },
    {
      employerId: 5,
      employerName: 'Robert Lee',
      companyName: 'Global Manufacturing Inc.',
      email: 'robert@globalmfg.com',
      phone: '5432109876',
      city: 'San Francisco',
    },
    {
      employerId: 6,
      employerName: 'Olivia Martinez',
      companyName: 'AI Solutions Pvt. Ltd.',
      email: 'olivia@aisolutions.com',
      phone: '4321098765',
      city: 'Seattle',
    },
  ];

  jobposts: Jobpost[] = [];
  filteredJobPosts: Jobpost[] = [];

  user: User[] = [
    {
      id: 1,
      email: 'admin@example.com',
      password: 'admin123',
      role: 'admin',
    },
    {
      id: 2,
      email: 'employer1@example.com',
      password: 'employer123',
      role: 'employer',
    },
    {
      id: 3,
      email: 'employer2@example.com',
      password: 'employer456',
      role: 'employer',
    },
    {
      id: 4,
      email: 'jobseeker1@example.com',
      password: 'jobseeker123',
      role: 'jobseeker',
    },
    {
      id: 5,
      email: 'jobseeker2@example.com',
      password: 'jobseeker456',
      role: 'jobseeker',
    },
    {
      id: 6,
      email: 'guest@example.com',
      password: 'guest123',
      role: 'guest',
    },
  ];

  getMaskedPassword(password: string): string {
    return '*'.repeat(password.length);
  }

  showJobPosts: boolean = false;
  showJobSeekers: boolean = false;
  showEmployers: boolean = false;
  showApplications: boolean = false;
  usersdiv: boolean = true;

  ngOnInit() {
    // Fetch job posts
    this.js.getAllJobPosts().subscribe((j) => {
      this.jobposts = j;
      this.filteredJobPosts = [...this.jobposts];
    });

    // Fetch job seekers
    this.js.getAllJobSeekers().subscribe((seekers) => {
      this.jobSeekers = seekers;
    });

    // Fetch employers
    this.es.getAllEmployers().subscribe((employers) => {
      this.employers = employers;
    });
  }

  toggleJobPosts() {
    this.showJobPosts = true;
    this.usersdiv = false;
    this.showApplications = false;
    this.showJobSeekers = false;
    this.showEmployers = false;
  }

  toggleJobSeekers() {
    this.showJobSeekers = true;
    this.showJobPosts = false;
    this.usersdiv = false;
    this.showApplications = false;
    this.showEmployers = false;
  }

  toggleEmployers() {
    this.showEmployers = true;
    this.showJobSeekers = false;
    this.showJobPosts = false;
    this.usersdiv = false;
    this.showApplications = false;
  }

  toggleApplications() {
    this.showApplications = true;
    this.showJobPosts = false;
    this.usersdiv = false;
    this.showJobSeekers = false;
    this.showEmployers = false;
  }

  showHome() {
    this.showJobPosts = false;
    this.usersdiv = true;
    this.showApplications = false;
    this.showJobSeekers = false;
    this.showEmployers = false;
  }

  jobpost(): void {
    this.r.navigate(['/jobpost']);
  }

  profiledropdownOpen = false;
  dropdownOpen = false;
  selectedFilter = 'title';
  searchTerm = '';

  toggleDropdown() {
    this.profiledropdownOpen = !this.profiledropdownOpen;
  }

  filterToggleDropdown() {
    this.dropdownOpen = !this.dropdownOpen;
  }

  setFilter(filter: string) {
    this.selectedFilter = filter;
    this.dropdownOpen = false;
  }

  filterJobs() {
    const searchTermLower = this.searchTerm.toLowerCase();
    this.filteredJobPosts = this.jobposts.filter((job) => {
      switch (this.selectedFilter) {
        case 'title':
          return job.title.toLowerCase().startsWith(searchTermLower);
        case 'salary':
          return job.salary.toString().startsWith(this.searchTerm);
        case 'location':
          return job.location.toLowerCase().startsWith(searchTermLower);
        case 'date':
          const formattedDate = formatDate(
            job.postedDate,
            'dd-MMM-yyyy',
            'en-US'
          );
          return formattedDate.toLowerCase().startsWith(searchTermLower);
        default:
          return false;
      }
    });
  }

  notifications: Activity[] = [
    {
      activityId: 1,
      activityType: 'Application Submitted',
      activityDate: new Date(),
      jobSeekerId: 101,
      jobPostId: 401,
      employerId: 501,
    },
    {
      activityId: 2,
      activityType: 'Profile Updated',
      activityDate: new Date(),
      jobSeekerId: 102,
      jobPostId: 402,
      employerId: 502,
    },
    {
      activityId: 3,
      activityType: 'Interview Scheduled',
      activityDate: new Date(),
      jobSeekerId: 103,
      jobPostId: 403,
      employerId: 503,
    },
  ];

  notificationsDropdownOpen = false;

  toggleNotifications() {
    this.notificationsDropdownOpen = !this.notificationsDropdownOpen;
  }

  removeNotification(index: number) {
    this.notifications.splice(index, 1);
  }

  clearAllNotifications() {
    this.notifications = [];
  }

  applications: Application[] = [
    {
      applicationId: 1,
      jobPostTitle: 'Frontend Developer',
      postedDate: new Date('2025-02-21T12:45:33.644Z'),
      location: 'Pune',
      salary: 75000,
      jobseekerName: 'Alice Smith',
      jobseekerEmail: 'alice.smith@example.com',
    },
    {
      applicationId: 2,
      jobPostTitle: 'Backend Developer',
      postedDate: new Date('2025-03-01T09:15:20.000Z'),
      location: 'Mumbai',
      salary: 85000,
      jobseekerName: 'John Doe',
      jobseekerEmail: 'john.doe@example.com',
    },
  ];

  @HostListener('document:click', ['$event'])
  onClickOutside(event: MouseEvent) {
    const target = event.target as HTMLElement;
    const notificationsContainer = document.querySelector(
      '.notifications-container'
    );
    if (notificationsContainer && !notificationsContainer.contains(target)) {
      this.notificationsDropdownOpen = false;
    }
  }
}
