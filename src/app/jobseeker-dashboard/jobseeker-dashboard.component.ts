import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { JobseekerServiceService } from '../jobseeker-service.service';
import { formatDate } from '@angular/common';
import { Jobpost } from '../Jobpost';
import { Activity } from '../Activity';
import { Application } from '../Application';

@Component({
  selector: 'app-jobseeker-dashboard',
  templateUrl: './jobseeker-dashboard.component.html',
  styleUrls: ['./jobseeker-dashboard.component.css']
})
export class JobseekerDashboardComponent implements OnInit {
  constructor(private r: Router, private js: JobseekerServiceService) {}

  jobposts: Jobpost[] = [];
  filteredJobPosts: Jobpost[] = [];

  showJobPosts: boolean = false;

  ngOnInit() {
    // Fetch job posts when the component is initialized
    this.js.getAllJobPosts().subscribe((j) => {
      this.jobposts = j;
      this.filteredJobPosts = [...this.jobposts];
    });
  }

  toggleJobPosts() {
    this.showJobPosts = true;
    this.showFeaturedCompanies = false;
    this.showApplications=false;
  }

  showFeaturedCompanies: boolean = true;
  showHome() {
    this.showJobPosts = false;
    this.showFeaturedCompanies = true;
    this.showApplications=false;
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
          const formattedDate = formatDate(job.postedDate, 'dd-MMM-yyyy', 'en-US');
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
      employerId: 501
    },
    {
      activityId: 2,
      activityType: 'Profile Updated',
      activityDate: new Date(),
      jobSeekerId: 102,
      jobPostId: 402,
      employerId: 502
    },
    {
      activityId: 3,
      activityType: 'Interview Scheduled',
      activityDate: new Date(),
      jobSeekerId: 103,
      jobPostId: 403,
      employerId: 503
    }
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
      jobseekerEmail: 'alice.smith@example.com'
    },
    {
      applicationId: 2,
      jobPostTitle: 'Backend Developer',
      postedDate: new Date('2025-03-01T09:15:20.000Z'),
      location: 'Mumbai',
      salary: 85000,
      jobseekerName: 'John Doe',
      jobseekerEmail: 'john.doe@example.com'
    },
    {
      applicationId: 3,
      jobPostTitle: 'Full Stack Developer',
      postedDate: new Date('2025-03-10T14:30:00.000Z'),
      location: 'Bangalore',
      salary: 90000,
      jobseekerName: 'Emma Johnson',
      jobseekerEmail: 'emma.johnson@example.com'
    }
  ];


  showApplications: boolean = false;

  toggleApplications() {
    this.showApplications = true;
    this.showJobPosts = false;
    this.showFeaturedCompanies = false;
  }




}
